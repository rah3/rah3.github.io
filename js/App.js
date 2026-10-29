import createNavigation
  from './Navigation.js';

import createScrollSpy
  from './ScrollSpy.js';

import createEmailClipboard
  from './EmailClipboard.js';

const createApp = () => {

  const services = [
    createNavigation('nav', 'navToggle'),

    createScrollSpy(
      '.section',
      '.nav a',
      80
    ),

    createEmailClipboard(
      'copyEmail',
      'rahiedatta@gmail.com'
    )
  ];

  const init = () => {

    services.forEach(service =>
      service.init()
    );

    console.log(
      'Portfolio initialized'
    );
  };

  return { init };
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const app = createApp();
    app.init();
  }
);