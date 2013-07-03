'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('blink', function() {
        return {
            template: '<marquee scrollamount="100%">Blink!</marquee>'
        };
    });