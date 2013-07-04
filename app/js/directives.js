'use strict';

/* Directives */

// add a namespace for custom directives
angular.module('myApp.directives', []);
angular.module('myApp.directives')
	.directive('slider', function () {
		return{
			restrict: 'E',
			scope: {  target: '=value' },
			template: '<input type="range" max="{{max}}" min="{{min}}" step="{{step}}" ng-model="target">',
			controller : function($scope,$element,$attrs,$rootScope){
				var step = $attrs.step,
					max = $attrs.max,
					min = $attrs.min,
					ranges = angular.fromJson($attrs.ranges);

				$scope.max = max;
				$scope.min = min;
				$scope.step = step;
				$scope.rangeValue = 10;
			},
			link: function (scope, elem, attrs) {}
		}
	});

angular.module('myApp.directives').directive('myBlinker', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/blink.html',
        scope: {},
        link: function(scope, element, attrs)
        {
            var marquee = element.find("marquee");
            var input = element.find("input");

            // Attach blur event
            input.bind('blur', function()
            {
                scope.$apply(function()
                {
                    scope.editMode = false;
                    marquee.text(input.val());
                });
            });
            // edit mode boolean controls the visibility of the blink and input
            scope.editMode = false;
            // called when the marquee tag is clicked
            scope.edit = function() {
                scope.editMode = true;
                input.val(marquee.text());
            };
        }
    };
});