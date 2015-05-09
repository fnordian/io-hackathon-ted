/*global define */

'use strict';

define(function() {

/* Controllers */

var controllers = {};

controllers.resultsCtrl = function($scope, $resource) {
    //functionality here!
    $scope.resultA = 14;
}
controllers.resultsCtrl.$inject = ['$scope', '$resource'];

controllers.MyCtrl2 = function() {}
controllers.MyCtrl2.$inject = [];

return controllers;

});