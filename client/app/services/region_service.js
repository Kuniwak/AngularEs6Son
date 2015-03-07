import angular from 'angular';

angular.module('Es6SonApp')
.factory('Region', ['$resource', 'SERVER_URL',
  ($resource, SERVER_URL) => {
    var baseUrl = SERVER_URL + '/api/regions/:id';
    return $resource(baseUrl);
  }
]);
