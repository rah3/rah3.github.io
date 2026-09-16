/**
 * EmailClipboard.js — COMP 2406 OOP Style
 * Encapsulated clipboard service with state management
 */
class EmailClipboard {
  constructor(buttonId, email) {
    this.button = document.getElementById(buttonId);
    this.email = email;
    this.originalText = '';
    this.timeoutId = null;
  }

  init() {
    if (!this.button) return;
    this.originalText = this.button.textContent;
    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('click', () => this.copy());
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.showSuccess();
    } catch (err) {
      this.showFallback();
    }
  }

  showSuccess() {
    this.button.textContent = 'Copied!';
    this.button.style.background = '#111';
    this.button.style.color = '#fff';

    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.reset(), 1500);
  }

  showFallback() {
    window.prompt('Copy email:', this.email);
  }

  reset() {
    this.button.textContent = this.originalText;
    this.button.style.background = '';
    this.button.style.color = '';
  }
}
