/**
 * Navigation.js — COMP 2406 OOP Style
 * Dr. Louis D. Nel — Encapsulated navigation component
 */
class Navigation {
  constructor(navId, toggleId) {
    this.navElement = document.getElementById(navId);
    this.toggleElement = document.getElementById(toggleId);
    this.isOpen = false;
  }

  init() {
    if (!this.navElement || !this.toggleElement) return;
    this.bindEvents();
  }

  bindEvents() {
    this.toggleElement.addEventListener('click', () => this.toggle());
    
    // Close nav when link clicked (mobile)
    const links = this.navElement.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.navElement.classList.toggle('open', this.isOpen);
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
      this.navElement.classList.remove('open');
    }
  }

  getElement() {
    return this.navElement;
  }
}
