import angular from 'angular';

angular.module('Es6SonApp')
.controller('ListController', ['$scope', '$http', 'Bean', 'Region',
  ($scope, $http, Bean, Region) => {

    $scope.beans = Bean.query();
    $scope.regions = Region.query();

    $scope.delete = (id) => {
      Bean.delete({id: id}, () => {
        $scope.beans = Bean.query();
      });
    };

  }
]);
