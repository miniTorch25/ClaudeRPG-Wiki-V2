(() => {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const search = document.getElementById('nav-search');
  const buttons = Array.from(document.querySelectorAll('button[data-language]'));
  const key = 'clauderpg-wiki-language';

  function applyLanguage(language) {
    if (language !== 'th') language = 'en';
    document.documentElement.lang = language;
    if (search) search.placeholder = search.dataset[`placeholder${language === 'th' ? 'Th' : 'En'}`] || search.placeholder;
    document.body.classList.toggle('lang-en', language === 'en');
    document.body.classList.toggle('lang-th', language === 'th');
    document.querySelectorAll('[data-lang="en"], [data-lang="th"]').forEach(node => {
      node.hidden = node.dataset.lang !== language;
    });
    document.querySelectorAll('.article-content p, .home-hero p').forEach(paragraph => {
      const first = paragraph.firstElementChild;
      if (!first || first.tagName !== 'STRONG') return;
      const label = first.textContent.trim().replace(/:$/, '').toUpperCase();
      if (label === 'EN' || label === 'TH') paragraph.hidden = label.toLowerCase() !== language;
    });
    buttons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(key, language); } catch (_) {}
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-language]');
    if (button) { event.preventDefault(); applyLanguage(button.dataset.language); }
  });
  let language = 'en';
  try { const saved = localStorage.getItem(key); if (saved === 'en' || saved === 'th') language = saved; } catch (_) {}
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