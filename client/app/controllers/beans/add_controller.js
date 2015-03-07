import angular from 'angular';

angular.module('Es6SonApp')
.controller('AddController',['$scope', '$state', '$http', 'Bean', 'regions',
  ($scope, $state, $http, Bean, regions) => {

    $scope.regions = regions;

    $scope.register = () => {
      var bean = new Bean($scope.bean);
      bean.$save(() => {
        $state.go('app.root.list');
      });
    };
  }

]);
