(() => {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const search = document.getElementById('nav-search');
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