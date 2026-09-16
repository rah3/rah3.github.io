/**
 * App.js — Main Application Controller
 * COMP 2406 — Dr. Louis D. Nel — OOP Principles
 * 
 * Demonstrates:
 * - Encapsulation: Each component owns its state
 * - Composition: App composes Navigation, ScrollSpy, EmailClipboard
 * - Separation of Concerns: Each class has single responsibility
 */
class PortfolioApp {
  constructor() {
    // Composition — App owns components
    this.navigation = new Navigation('nav', 'navToggle');
    this.scrollSpy = new ScrollSpy('.section', '.nav a', 80);
    this.emailClipboard = new EmailClipboard('copyEmail', 'rahiedatta@gmail.com');
  }

  init() {
    // Initialize all components
    this.navigation.init();
    this.scrollSpy.init();
    this.emailClipboard.init();
    console.log('PortfolioApp initialized — COMP 2406 OOP — Rahie Datta');
  }
}

// Entry point — Vanilla JS, no frameworks
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
