const createApp = () => {
  const services = [
    new Navigation('nav', 'navToggle'),
    new ScrollSpy('.section', '.nav a', 80),
    new EmailClipboard(
      'copyEmail',
      'rahiedatta@gmail.com'
    ),
  ];

  const init = () => {
    services.forEach(service => service.init());

    console.log(
      'Portfolio initialized (Functional Composition) - Rahie Datta'
    );
  };

  return { init };
};

document.addEventListener('DOMContentLoaded', () => {
  createApp().init();
});