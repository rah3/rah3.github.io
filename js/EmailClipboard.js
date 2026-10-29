/**
 * EmailClipboard.js
 *
 * Functional composition approach.
 * No classes.
 * No `this`.
 * State remains private through closures.
 */

const createEmailClipboard = (buttonId, email) => {
  const button = document.getElementById(buttonId);

  if (!button) {
    return {
      init: () => { },
    };
  }

  const originalText = button.textContent;
  let timeoutId = null;

  const reset = () => {
    button.textContent = originalText;
    button.style.background = '';
    button.style.color = '';
  };

  const showSuccess = () => {
    button.textContent = 'Copied!';
    button.style.background = '#111';
    button.style.color = '#fff';

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(reset, 1500);
  };

  const showFallback = () => {
    window.prompt('Copy email:', email);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showSuccess();
    } catch {
      showFallback();
    }
  };

  const bindEvents = () => {
    button.addEventListener('click', copy);
  };

  const init = () => {
    bindEvents();
  };

  return {
    init,
  };
};

export default createEmailClipboard;