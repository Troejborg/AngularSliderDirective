'use strict';

/* Directives */

// add a namespace for custom directives
angular.module('myApp.directives', []);

angular.module('myApp.directives').directive('mySlider', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/slider.html',
        scope: {},
        link: function(scope, element, attrs)
        {
            var max = scope.max;
            var min = scope.min;
            var step = scope.step;
        }
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