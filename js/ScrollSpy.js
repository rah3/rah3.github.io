/**
 * ScrollSpy.js
 *
 * Functional composition approach.
 * Private state via closure.
 */

const createScrollSpy = (
  sectionSelector,
  linkSelector,
  offset = 80
) => {
  const sections = document.querySelectorAll(sectionSelector);
  const links = document.querySelectorAll(linkSelector);

  if (sections.length === 0 || links.length === 0) {
    return {
      init: () => {
        // Empty object
      },
    };
  }

  let currentId = '';

  const render = () => {
    links.forEach((link) => {
      const isActive =
        link.getAttribute('href') === `#${currentId}`;

      link.classList.toggle('active', isActive);
    });
  };

  const findCurrentSection = () => {
    let activeId = '';

    sections.forEach((section) => {
      const top = section.offsetTop - offset;

      if (window.scrollY >= top) {
        activeId = section.id;
      }
    });

    return activeId;
  };

  const updateActive = () => {
    const nextId = findCurrentSection();

    if (nextId === currentId) {
      return;
    }

    currentId = nextId;
    render();
  };

  const bindEvents = () => {
    window.addEventListener(
      'scroll',
      updateActive,
      { passive: true }
    );
  };

  const init = () => {
    bindEvents();
    updateActive();
  };

  return {
    init,
  };
};

export default createScrollSpy;