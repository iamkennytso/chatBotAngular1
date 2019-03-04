angular
  .module('pokeWeakApp')
  .component('individualMessage', {
    template: 
      `<div class="isHuman-{{$ctrl.message.senderIsHuman}}">
        {{$ctrl.message.messageContent}}
      </div>`,
    bindings: {
      message: '<',
    }
  })