'use strict';

// add a namespace for custom directives
angular.module('myApp.directives', []);

angular.module('myApp.directives').directive('blink', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<marquee scrollamount="100%" ng-transclude></marquee>'
    };
});
<blink>Bring the blink back!</blink>