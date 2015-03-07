import angular from 'angular';

angular.module('Es6SonApp')
.controller('EditController',['$scope', '$state', '$stateParams', '$http',
  ($scope, $state, $stateParams, $http) => {

    $scope.regions = [];
    $http.get('http://localhost:8000/api/regions')
      .success((data) => {
        $scope.regions = data;

        $http.get('http://localhost:8000/api/beans/' + $stateParams.id)
          .success((data) => {
            data.importDate = data.importDate && new Date(data.importDate);
            $scope.bean = data;
          });
      });

    $scope.update = () => {
      $http.put('http://localhost:8000/api/beans/' + $stateParams.id, {
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
