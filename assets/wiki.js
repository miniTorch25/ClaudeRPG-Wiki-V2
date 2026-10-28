(() => {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const search = document.getElementById('nav-search');
  const languageButtons = Array.from(document.querySelectorAll('[data-language]'));

  // Split common inline English · Thai pairs so the selected language can be shown alone.
  function splitInlineLanguagePairs() {
    const root = document.querySelector('.article-content');
    if (!root || root.dataset.inlineLanguageSplit === 'true') return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement || node.parentElement.closest('script,style,code,pre,textarea')) continue;
      if (/[ \u00b7|\/]/.test(node.nodeValue) && /[\u0E00-\u0E7F]/.test(node.nodeValue)) nodes.push(node);
    }
    nodes.forEach(node => {
      const value = node.nodeValue;
      const delimiters = [' · ', ' | ', ' / '];
      let splitAt = -1, splitLength = 0;
      delimiters.forEach(delimiter => {
        const at = value.lastIndexOf(delimiter);
        if (at >= 0 && /[\u0E00-\u0E7F]/.test(value.slice(at + delimiter.length)) && at > splitAt) {
          splitAt = at;
          splitLength = delimiter.length;
        }
      });
      if (splitAt < 1) return;
      const english = value.slice(0, splitAt).trimEnd();
      const thai = value.slice(splitAt + splitLength).trimStart();
      if (!english || !thai || !/[\u0E00-\u0E7F]/.test(thai)) return;
      const en = document.createElement('span');
      en.dataset.lang = 'en';
      en.textContent = english;
      const th = document.createElement('span');
      th.dataset.lang = 'th';
      th.textContent = thai;
      const fragment = document.createDocumentFragment();
      fragment.append(en, document.createTextNode(' '), th);
      node.parentNode.replaceChild(fragment, node);
    });
    root.dataset.inlineLanguageSplit = 'true';
  }

  // The existing wiki uses explicit EN/TH lead-ins for paired explanations.
  // Hide the non-selected explanation without removing the source Markdown.
  function applyLanguage(language) {
    document.body.classList.toggle('lang-en', language === 'en');
    document.body.classList.toggle('lang-th', language === 'th');
    document.documentElement.lang = language;
    languageButtons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.article-content p, .home-hero p').forEach(paragraph => {
      const first = paragraph.querySelector('strong');
      if (!first || first.parentElement !== paragraph) return;
      const label = first.textContent.trim().replace(/:$/, '').toUpperCase();
      if (label !== 'EN' && label !== 'TH') return;
      paragraph.classList.toggle('language-hidden', label !== language.toUpperCase());
    });
    try { localStorage.setItem('clauderpg-wiki-language', language); } catch (_) {}
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-language]');
    if (button) { event.preventDefault(); applyLanguage(button.dataset.language); }
  });
  let initialLanguage = 'en';
  try {
    const saved = localStorage.getItem('clauderpg-wiki-language');
    if (saved === 'en' || saved === 'th') initialLanguage = saved;
  } catch (_) {}
  splitInlineLanguagePairs();
  applyLanguage(initialLanguage);

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (search && sidebar) {
    const links = Array.from(sidebar.querySelectorAll('.side-nav a'));
    const headings = Array.from(sidebar.querySelectorAll('.nav-heading'));
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      links.forEach(link => {
        link.hidden = !!q && !link.textContent.toLowerCase().includes(q);
      });
      headings.forEach(heading => {
        let node = heading.nextElementSibling;
        let hasVisible = false;
        while (node && !node.classList.contains('nav-heading')) {
          if (node.matches('a') && !node.hidden) hasVisible = true;
          node = node.nextElementSibling;
        }
        heading.hidden = !!q && !hasVisible;
      });
    });
  }
})();