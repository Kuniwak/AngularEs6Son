import angular from 'angular';

angular.module('Es6SonApp')
.controller('EditController',['$scope', '$state', '$stateParams', '$http', 'Bean', 'regions',
  ($scope, $state, $stateParams, $http, Bean, regions) => {

    $scope.regions = regions;
    Bean.get({id: $stateParams.id}, (data) => {
      data.importDate = data.importDate && new Date(data.importDate);
      $scope.bean = data;
    });

    $scope.update = () => {
      $scope.bean.$update({id: $scope.bean.id}, () => {
        $state.go('app.root.list');
      });
    };

  }
]);
