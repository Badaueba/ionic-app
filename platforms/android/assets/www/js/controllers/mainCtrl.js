angular.module('mainCtrl', [])

    .controller('mainController', function($rootScope, $location) {

        var vm = this;
        vm.message = "Hello World";
        console.log('mainCtrl');
    });