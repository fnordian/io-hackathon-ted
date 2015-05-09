/*global require, requirejs */

'use strict';

requirejs.config({
  paths: {
    'angular': ['../lib/angularjs/angular'],
    'angular-route': ['../lib/angularjs/angular-route'],
    'angular-resource': ['../lib/angularjs/angular-resource']
  },
  shim: {
    'angular': {
      exports : 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports : 'angular'
    },
    'angular-resource': {
      deps: ['angular'],
      exports : 'angular'
    }
  }
});

require(['angular', './controllers', './directives', './filters', './services', 'angular-route', 'angular-resource'],
  function(angular, controllers) {

    // Declare app level module which depends on filters, and services

    angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute']).controller('resultsCtrl', ['$scope', function($scope) {
                        $scope.resultA = 14;
            }]);

    angular.bootstrap(document, ['myApp']);

});
