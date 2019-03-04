class inputBarCtrl {
  constructor(){}
}

angular
  .module('pokeWeakApp')
  .component('inputBar', {
    template: 
      `<form class='App-Paper-InputBarContainer' ng-submit='ctrl.handleSubmit()'>
        <input
          type='text'
          ng-model="ctrl.userInputMessage" 
          class='App-Paper-InputBarContainer'
        />
      </form>`,
    controller: inputBarCtrl,
    controllerAs: "ctrl",
    bindings: {
      userInputMessage: '=',
      handleSubmit: '&',
    }
  })