import { Message } from '../typescript/interfaces.message-container'

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
    templateUrl: '/individual-message.component.html',
    controller: indMesCtrl,
    controllerAs: 'ctrl',
    bindings: {
      message: '<',
    }
  })