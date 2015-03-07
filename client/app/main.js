import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';

angular.module('Es6SonApp', ['ui.router', 'ngResource'])

.config(['$locationProvider',
  ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }
]);
