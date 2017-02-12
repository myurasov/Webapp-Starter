/**
 * Configuration
 */

import environment from './_environment';

export default (app) => {

  // common config
  app.constant('aws_access_key_id', '');
  app.constant('aws_secret_key', '');

  switch (environment) {
    case 'development':
      app.constant('api_endpoint', '--endpoint--');
      break;

    case 'production':
      app.constant('api_endpoint', '--endpoint--');
      break;

    default:
      throw new Error(`Invalid environment "${environment}"`);
  }

  // material theme
  app.config( /* @ngInject */ ($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('orange');
  });

  // google analytics
  app.config( /* @ngInject */ (AnalyticsProvider) => {
    AnalyticsProvider.setAccount('--ua-acc--');
  }).run( /* @ngInject */ (Analytics) => {});

};
