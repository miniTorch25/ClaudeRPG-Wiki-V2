(() => {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const search = document.getElementById('nav-search');
  const languageButtons = Array.from(document.querySelectorAll('[data-language]'));

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

  languageButtons.forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });
  let initialLanguage = 'en';
  try {
    const saved = localStorage.getItem('clauderpg-wiki-language');
    if (saved === 'en' || saved === 'th') initialLanguage = saved;
  } catch (_) {}
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