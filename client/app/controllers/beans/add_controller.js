import angular from 'angular';

angular.module('Es6SonApp')
.controller('AddController',['$scope', '$state', '$http',
  ($scope, $state, $http) => {

    $scope.regions = [];
    $http.get('http://localhost:8000/api/regions')
      .success((data) => {
        $scope.regions = data;
      });
    $scope.register = () => {
      $http.post('http://localhost:8000/api/beans', {
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
