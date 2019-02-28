angular
  .module('pokeWeakApp')
  .component('inputBar', {
    templateUrl: '/input-bar.component.html',
    bindings: {
      userInput: '='
      // submit="<",
      // change="<",
    }
  })