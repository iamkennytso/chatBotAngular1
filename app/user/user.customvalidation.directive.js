function checkPokemonName() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, ngModel) {
            var timeout;
            var debounce = function (func, wait) {
                console.log('bouncing');
                return function () {
                    var later = function () {
                        timeout = null;
                        func.call();
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            };
            var apiCall = function (viewValue) {
                var pokemon = viewValue.toLowerCase();
                console.log('apiCall before', scope.ctrl.loading);
                scope.ctrl.loading = false;
                console.log('apiCall after ', scope.ctrl.loading);
                console.log(pokemon);
            };
            ngModel.$validators.checkPokemon = function (modelValue, viewValue) {
                console.log("typing");
                scope.ctrl.loading = true;
                return debounce(function () { return apiCall(viewValue); }, 500)();
            };
        }
    };
}
angular
    .module('pokeWeakApp')
    .directive('checkPokemon', checkPokemonName);
