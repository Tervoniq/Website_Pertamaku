// Restore the theme before the page is rendered.
const themeRoot = document.documentElement;
let initialTheme = 'light';
try {
  if (localStorage.getItem('theme') === 'dark') initialTheme = 'dark';
} catch {
  // The toggle remains usable when browser storage is unavailable.
}
themeRoot.dataset.theme = initialTheme;

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    themeRoot.dataset.theme = theme;
    const dark = theme === 'dark';
    const label = dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
  }

  applyTheme(initialTheme);
  themeToggle.addEventListener('click', () => {
    const theme = themeRoot.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Keep the selected theme for this page even if saving is blocked.
    }
  });

  const helloButton = document.getElementById('hello-button');
  const message = document.getElementById('message');

  helloButton.addEventListener('click', () => {
    message.textContent = 'Halo! Website saya berhasil!';
    message.hidden = false;
  });
});
