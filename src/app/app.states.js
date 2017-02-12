/**
 * App states
 * @author Mikhail Yurasov <me@yurasov.me>
 */

import MainScreenController from './states/main/screen.controller';
import MainContentController from './states/main/content.controller';

// configure states
export default /* @ngInject */ ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main', {
      url: '/',
      views: {
        'screen': {
          templateUrl: 'app/states/main/screen.html',
          controller: MainScreenController
        },
        'content@main': {
          templateUrl: 'app/states/main/content.html',
          controller: MainContentController
        }
      }
    })

  ;

};
