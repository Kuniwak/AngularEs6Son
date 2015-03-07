import angular from 'angular';

angular.module('Es6SonApp')
.controller('ListController', ['$scope', '$http',
  ($scope, $http) => {

    $http.get('http://localhost:8000/api/beans')
      .success((data) => {
        $scope.beans = data;
      });
    $http.get('http://localhost:8000/api/regions')
      .success((data) => {
        $scope.regions = data;
      });
    $scope.delete = (id) => {
      $http.delete('http://localhost:8000/api/beans/' + id)
        .success(() => {
          $http.get('http://localhost:8000/api/beans')
            .success((data) => {
              list.beans = data;
            });
        });
    };

  }
]);
