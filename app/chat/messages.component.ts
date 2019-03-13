import { Message } from './message-container'

class messagesCtrl implements ng.IComponentController{
  constructor(){}
  messages: Message[];
  validMessages: number;
  $onChanges(changeObject: { messages: ng.IChangesObject<Message[]> }) {
    if (changeObject && changeObject.messages) {
      this.validMessages++;
    }
  }
}

angular
  .module('pokeWeakApp')
  .component('messages', {
    template: 
      `
        <div class="App-Paper-MessagesContainer">
          <individual-message ng-repeat="message in ctrl.messages" message="message"> </individual-message>
        </div>
      `,
    controller: messagesCtrl,
    controllerAs: "ctrl",
    bindings: {
      messages: '<',
      validMessages: '=',
    }
  })