import angular from 'angular';

angular.module('Es6SonApp')
.controller('AddController',['$scope', '$state', '$http', 'Bean', 'Region',
  ($scope, $state, $http, Bean, Region) => {

    $scope.regions = Region.query();

    $scope.register = () => {
      var bean = new Bean($scope.bean);
      bean.$save(() => {
        $state.go('app.root.list');
      });
    };
  }

]);
