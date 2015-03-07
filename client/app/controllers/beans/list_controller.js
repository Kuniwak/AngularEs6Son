import angular from 'angular';

angular.module('Es6SonApp')
.controller('ListController', ['$scope', '$http', 'SERVER_URL',
  ($scope, $http, SERVER_URL) => {

    $http.get(`${SERVER_URL}/api/beans`)
      .success((data) => {
        $scope.beans = data;
      });
    $http.get(`${SERVER_URL}/api/regions`)
      .success((data) => {
        $scope.regions = data;
      });
    $scope.delete = (id) => {
      $http.delete(`${SERVER_URL}/api/beans/` + id)
        .success(() => {
          $http.get(`${SERVER_URL}/api/beans`)
            .success((data) => {
              list.beans = data;
            });
        });
    };

  }
]);
