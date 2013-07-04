'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('myController', ['$scope',function($scope)
	{
		$scope.message = {message:"Hello"};
	}])
	.controller('MyCtrl2', ['$scope',function() {

	}]);