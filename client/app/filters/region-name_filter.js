import angular from 'angular';

angular.module('Es6SonApp')
.filter('regionName', ['Region',
  (Region) => {

    var region = Region.query();
    return (input) => {
      var ret = '';
      angular.forEach(region, (v) => {
        if (v.id === input) ret = v.name;
      });
      return ret;
    };

  }
]);
