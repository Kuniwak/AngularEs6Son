import angular from 'angular';

angular.module('Es6SonApp')
.factory('Bean', ['$resource', 'SERVER_URL',
  ($resource, SERVER_URL) => {
    var baseUrl = SERVER_URL + '/api/beans/:id';
    return $resource(baseUrl, {}, {
      update: {method: 'PUT'}
    });
  }
]);
