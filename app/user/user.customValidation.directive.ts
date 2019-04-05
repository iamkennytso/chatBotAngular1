 function checkPokemonName(): ng.IDirective {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope: ng.IScope, ngModel: ng.INgModelController) {
      let timeout;

      const debounce = function(func, wait) {
        console.log('bouncing')
        return () => {
          const later = function() {
            timeout = null;
            func.call()
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      };

      const apiCall = function(viewValue) {
        const pokemon = viewValue.toLowerCase();
        console.log('apiCall before', scope.ctrl.loading)
        scope.ctrl.loading = false
        console.log('apiCall after ', scope.ctrl.loading)
        console.log(pokemon)
      };

      ngModel.$validators.checkPokemon = (modelValue: ng.IModelViewChangeListener, viewValue: string) {
        console.log("typing")
        scope.ctrl.loading = true
        
        return debounce(() => apiCall(viewValue), 500)()
      }
    }
  }
}

angular
  .module('pokeWeakApp')
  .directive('checkPokemon', checkPokemonName)

