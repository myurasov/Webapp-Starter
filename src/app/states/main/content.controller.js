/**
 * Content controller
 */

export default /* @ngInject */ ($scope, $timeout) => {

  $scope.state = 'ready';
  $scope.cards = [];

  $scope.add = () => {
    $scope.state = 'working';

    $timeout(() => {
        $scope.cards.unshift({});
        $scope.state = 'ready';
      }, 500 + 1000 * Math.random());
  };
};
