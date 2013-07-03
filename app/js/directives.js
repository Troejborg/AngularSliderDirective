'use strict';

/* Directives */

// add a namespace for custom directives
angular.module('myApp.directives', []);

angular.module('myApp.directives').directive('slider', function () {
	return {
		restrict: 'E',
		scope: { value: '=value' },
		templateUrl: '/partials/slider.html',
		controller: function ($scope, $element, $attrs, $rootScope) {
			$element.slider().on('slide', function (ev) {
				$scope.$apply(function () {
					$rootScope[$attrs.value] = ev.value;
				});
			});
		},
		replace: true,
		link: function (scope, elem, attr) {}
	};
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