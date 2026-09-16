/**
 * ScrollSpy.js — COMP 2406 OOP Style
 * Encapsulated scroll-spy for active nav highlighting
 */
class ScrollSpy {
  constructor(sectionSelector, linkSelector, offset = 80) {
    this.sections = document.querySelectorAll(sectionSelector);
    this.links = document.querySelectorAll(linkSelector);
    this.offset = offset;
    this.currentId = '';
  }

  init() {
    if (this.sections.length === 0 || this.links.length === 0) return;
    this.bindEvents();
    this.updateActive();
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.updateActive(), { passive: true });
  }

  updateActive() {
    let current = '';
    this.sections.forEach(section => {
      const top = section.offsetTop - this.offset;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    if (current !== this.currentId) {
      this.currentId = current;
      this.render();
    }
  }

  render() {
    this.links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + this.currentId) {
        link.classList.add('active');
      }
    });
  }
}
