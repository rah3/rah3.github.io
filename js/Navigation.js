/**
 * Navigation.js
 *
 * Functional composition approach.
 * No classes.
 * No "this".
 * Private state through closures.
 */

const createNavigation = (navId, toggleId) => {
  const navElement = document.getElementById(navId);
  const toggleElement = document.getElementById(toggleId);

  if (!navElement || !toggleElement) {
    return {
      init: () => {
        // Empty object
      },
    };
  }

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    navElement.classList.toggle('open', isOpen);
  };

  const close = () => {
    if (!isOpen) {
      return;
    }

    isOpen = false;
    navElement.classList.remove('open');
  };

  const bindEvents = () => {
    toggleElement.addEventListener('click', toggle);

    navElement
      .querySelectorAll('a')
      .forEach((link) =>
        link.addEventListener('click', close)
      );
  };

  const init = () => {
    bindEvents();
  };

  return {
    init,
    close,
    toggle,
  };
};

export default createNavigation;