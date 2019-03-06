class inputBarCtrl implements ng.IComponentController {
  constructor(){}
  userInputMessage: string;
}

angular
  .module('pokeWeakApp')
  .component('inputBar', {
    templateUrl: './input-bar.component.html',
    controller: inputBarCtrl, 
    controllerAs: "ctrl",
    bindings: {
      userInputMessage: '=',
      handleSubmit: '&',
    }
  })