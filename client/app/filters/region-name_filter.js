import angular from 'angular';

angular.module('Es6SonApp')
.filter('regionName', ['$http',
  ($http) => {

    var region = [];
    $http.get('http://localhost:8000/api/regions')
      .success((data) => {
        region = data;
      });
    return (input) => {
      var ret = '';
      angular.forEach(region, (v) => {
        if (v.id === input) ret = v.name;
      });
      return ret;
    };

  }
]);
