angular
  .module('pokeWeakApp')
  .component('individualMessage', {
    templateUrl: '/individual-message.component.html',
    bindings: {
      message: '<'
    }
  })