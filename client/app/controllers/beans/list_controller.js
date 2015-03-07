import angular from 'angular';

angular.module('Es6SonApp')
.controller('ListController', ['$scope', '$http', 'Bean', 'regions',
  ($scope, $http, Bean, regions) => {

    $scope.beans = Bean.query();
    $scope.regions = regions;

    $scope.delete = (id) => {
      Bean.delete({id: id}, () => {
        $scope.beans = Bean.query();
      });
    };

  }
]);
