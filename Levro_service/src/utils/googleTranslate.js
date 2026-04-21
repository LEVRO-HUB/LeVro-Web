export const initGoogleTranslate = () => {
  // Check if script already exists
  if (document.getElementById('google-translate-script')) return;

  // Add the script
  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);

  // Initialize callback
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,ta,fr,hi,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };
};

export const changeLanguage = (langCode) => {
  const selectField = document.querySelector(".goog-te-combo");
  if (selectField) {
    selectField.value = langCode;
    selectField.dispatchEvent(new Event("change"));
  } else {
    // Fallback: set cookie manually and reload
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.host}; path=/`;
    window.location.reload();
  }
};
