'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('myController', [function($scope)
    {
		  $scope.message = {message:"Hello"};
    }])
    .controller('MyCtrl2', [function() {

    }]);