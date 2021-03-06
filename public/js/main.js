/*global require, requirejs */

'use strict';

requirejs.config({
  paths: {
    'angular': ['../lib/angularjs/angular'],
    'angular-route': ['../lib/angularjs/angular-route'],
    'angular-resource': ['../lib/angularjs/angular-resource'],
    'angular-chart' : ['../lib/angular-chart.js/angular-chart'],
    'chart' : ['../lib/chartjs/Chart']
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
    },
    'angular-chart': {
        deps:['angular', 'chart']
    }
  }
});

require(['angular', './controllers', './directives', './filters', './services', 'angular-route', 'angular-resource', 'angular-chart'],
  function(angular, controllers) {

    // Declare app level module which depends on filters, and services

    var ted = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute', 'ngResource', 'chart.js']);
    ted.config(['$resourceProvider', function($resourceProvider){}]);
    ted.controller('resultsCtrl', ['$scope', '$resource', '$interval', function($scope, $resource, $interval) {

        var resource =  $resource('/results')

      $scope.result = {};

        $scope.result = resource.get();
        $scope.labels = ["TeD.io (01579-2341043)", "VSecretary (01579-2335891)"];
        $scope.fillColors = ["rgba(220,220,220,0.5)", "rgba(100,200,120,0.5)"];


        $interval(function () {
          $scope.result = {"ted" : [[10,25]],
              "colours": [{
    fillColor: 'rgba(47, 0, 71, 0.8)',
    strokeColor: 'rgba(47, 0, 71, 0.8)',
    highlightFill: 'rgba(47, 0, 71, 0.8)',
    highlightStroke: 'rgba(47, 0, 71, 0.8)'
}]
          };//resource.get();
        }, 1000);
        
        
    }]);

    angular.bootstrap(document, ['myApp']);

});
