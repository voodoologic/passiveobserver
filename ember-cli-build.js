'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-netflify': {
      redirects: ['/* /index.html 200'],
    },
  });

  app.import('public/video.css');
  return app.toTree();
};
