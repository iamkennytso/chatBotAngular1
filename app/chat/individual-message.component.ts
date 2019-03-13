import { Message } from './message-container'

class indMesCtrl implements ng.IComponentController  {
  constructor(){}
  message: Message;
  isCard: Boolean;
  $onInit(){
    typeof this.message.messageContent === 'string' 
     ? this.isCard = false
     : this.isCard = true;
  }
}

angular
  .module('pokeWeakApp')
  .component('individualMessage', {
    templateUrl: '/chat/individual-message.tpl.html',
    controller: indMesCtrl,
    controllerAs: 'ctrl',
    bindings: {
      message: '<',
    }
  })