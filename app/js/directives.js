'use strict';

/* Directives */

// add a namespace for custom directives
angular.module('myApp.directives', []);

angular.module('myApp.directives')
	.directive('slider', function () {
		return{
			require: 'ngModel',
			restrict: 'E',
			template: '<input type="range" min="{{min}}" max="{{max}}" step="{{step}}" ng-model="sliderValue">',
			scope: {
				min: '@',
				max: '@',
				step: '@',
				ranges: '@',
				sliderValue: '=ngModel'
			},
			link: function (scope, elem, attrs) {
				var sliderRange = function (value) {
					for (var i = 0; i < scope.ranges.length; i++) {
						if ((value >= scope.ranges[i].from) && (value <= scope.ranges[i].to)) {
							// do logic to determine color here
						}
					}
				};
			}
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