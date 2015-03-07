import angular from 'angular';
import 'angular-ui-router';

angular.module('Es6SonApp', ['ui.router'])

.config(['$locationProvider',
  ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }
]);
