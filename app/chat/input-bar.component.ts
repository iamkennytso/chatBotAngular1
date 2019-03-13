class inputBarCtrl implements ng.IComponentController {
  constructor(){}
  userInputMessage: string;
}

angular
  .module('pokeWeakApp')
  .component('inputBar', {
    templateUrl: '/chat/input-bar.tpl.html',
    controller: inputBarCtrl, 
    controllerAs: "ctrl",
    bindings: {
      userInputMessage: '=',
      handleSubmit: '&',
    }
  })