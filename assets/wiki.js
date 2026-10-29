(() => {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const search = document.getElementById('nav-search');
  const buttons = Array.from(document.querySelectorAll('button[data-language]'));
  const key = 'clauderpg-wiki-language';

  // Detect both inline labels ("**EN:** text") and standalone language
  // markers ("**EN**" followed by one or more blocks of English content).
  function languageMarker(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE || node.tagName !== 'P') return null;
    const strong = node.querySelector(':scope > strong');
    if (!strong) return null;
    const label = strong.textContent.trim().replace(/:$/, '').trim().toLowerCase();
    if (label !== 'en' && label !== 'th') return null;
    const rest = node.textContent.replace(strong.textContent, '').trim();
    return { language: label, standalone: !rest };
  }

  function applyArticleLanguage(language) {
    const article = document.querySelector('.article-content');
    if (!article) return;

    // Restore blocks hidden by a previous language choice before recalculating.
    article.querySelectorAll('[data-language-hidden]').forEach(node => {
      node.hidden = false;
      node.removeAttribute('data-language-hidden');
    });

    const children = Array.from(article.children);
    const markerFor = node => {
      if (!node || node.nodeType !== Node.ELEMENT_NODE) return null;
      if (!/^(P|H1|H2|H3|H4|H5|H6|DIV)$/.test(node.tagName)) return null;
      if (node.matches('[data-lang]')) return null;
      const strong = node.querySelector(':scope > strong, :scope > b');
      const raw = (strong ? strong.textContent : node.textContent).trim();
      const label = raw.replace(/[:：]$/, '').trim().toLowerCase();
      if (label === 'en' || label === 'english') {
        const rest = strong ? node.textContent.replace(strong.textContent, '').replace(/^\\s*[:：]?\\s*/, '').trim() : '';
        return { language: 'en', standalone: !rest };
      }
      if (label === 'th' || label === 'thai' || label === 'ไทย') {
        const rest = strong ? node.textContent.replace(strong.textContent, '').replace(/^\\s*[:：]?\\s*/, '').trim() : '';
        return { language: 'th', standalone: !rest };
      }
      return null;
    };

    for (let i = 0; i < children.length; i++) {
      const marker = markerFor(children[i]);
      if (!marker) continue;

      if (!marker.standalone) {
        children[i].hidden = marker.language !== language;
        children[i].setAttribute('data-language-hidden', 'true');
        continue;
      }

      // A standalone EN/TH marker labels a whole language section. Keep every
      // following block in that section in sync, including headings and tables,
      // until the next language marker. Stopping at headings left most content
      // visible in both languages on several pages.
      children[i].hidden = true;
      children[i].setAttribute('data-language-hidden', 'true');
      let foundNextMarker = false;
      for (let j = i + 1; j < children.length; j++) {
        const nextMarker = markerFor(children[j]);
        if (nextMarker && nextMarker.standalone) {
          i = j - 1;
          foundNextMarker = true;
          break;
        }
        children[j].hidden = marker.language !== language;
        children[j].setAttribute('data-language-hidden', 'true');
      }
      if (!foundNextMarker) break;
    }
  }

  function applyLanguage(language) {
    if (language !== 'th') language = 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-label-en][data-label-th]').forEach(node => {
      node.setAttribute('aria-label', node.dataset[language === 'th' ? 'labelTh' : 'labelEn']);
    });
    if (search) {
      search.placeholder = search.dataset[language === 'th' ? 'placeholderTh' : 'placeholderEn'] ||
        (language === 'th' ? 'ค้นหาในเมนู…' : 'Search navigation…');
      search.setAttribute('aria-label', language === 'th' ? 'ค้นหาในเมนู' : 'Search navigation');
    }
    document.body.classList.toggle('lang-en', language === 'en');
    document.body.classList.toggle('lang-th', language === 'th');

    document.querySelectorAll('[data-lang="en"], [data-lang="th"]').forEach(node => {
      node.hidden = node.dataset.lang !== language;
    });
    applyArticleLanguage(language);

    buttons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(key, language); } catch (_) {}
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-language]');
    if (button) {
      event.preventDefault();
      applyLanguage(button.dataset.language);
    }
  });

  let language = 'en';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'en' || saved === 'th') language = saved;
  } catch (_) {}
  applyLanguage(language);

  if (toggle && sidebar) toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  if (search && sidebar) {
    const links = Array.from(sidebar.querySelectorAll('.side-nav a'));
    const headings = Array.from(sidebar.querySelectorAll('.nav-heading'));
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      links.forEach(link => { link.hidden = !!q && !link.textContent.toLowerCase().includes(q); });
      headings.forEach(heading => {
        let node = heading.nextElementSibling, visible = false;
        while (node && !node.classList.contains('nav-heading')) {
          if (node.matches('a') && !node.hidden) visible = true;
          node = node.nextElementSibling;
        }
        heading.hidden = !!q && !visible;
      });
    });
  }
})();