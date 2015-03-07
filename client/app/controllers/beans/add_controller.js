import angular from 'angular';

angular.module('Es6SonApp')
.controller('AddController',['$scope', '$state', '$http', 'SERVER_URL',
  ($scope, $state, $http, SERVER_URL) => {

    $scope.regions = [];
    $http.get(`${SERVER_URL}/api/regions`)
      .success((data) => {
        $scope.regions = data;
      });
    $scope.register = () => {
      $http.post(`${SERVER_URL}/api/beans`, {
        brand: $scope.bean.brand,
        amount: $scope.bean.amount,
        importDate: $scope.bean.importDate && $scope.bean.importDate.toISOString(),
        region: $scope.bean.region
      }).success(() => {
        $state.go('app.root.list');
      });
    };
  }

]);
