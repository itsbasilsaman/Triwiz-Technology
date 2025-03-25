document.getElementById('custom-language-toggle').addEventListener('change', function () {
  const htmlElement = document.documentElement;
  const newLang = this.checked ? 'ar' : 'en';

  // Toggle language
  htmlElement.setAttribute('lang', newLang);

  // Toggle text direction globally
  htmlElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');

  // Exclude navbar from direction change
  document.querySelector('.navbar').setAttribute('dir', 'ltr');

  // Update all elements with data-en and data-ar attributes
  document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
    const text = element.getAttribute(`data-${newLang}`);
    if (text) {
      element.textContent = text;
    }
  });
});

