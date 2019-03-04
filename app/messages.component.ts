class messagesCtrl {
  constructor(){}
  
}

angular
  .module('pokeWeakApp')
  .component('messages', {
    template: 
      `<div class="App-Paper-MessagesContainer">
        <individual-message ng-repeat="message in ctrl.messages" message="message"> </individual-message>
      </div>`,
    controller: messagesCtrl,
    controllerAs: "ctrl",
    bindings: {
      messages: '<',
    }
  })