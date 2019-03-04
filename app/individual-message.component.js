angular
    .module('pokeWeakApp')
    .component('individualMessage', {
    template: "<div class=\"isHuman-{{$ctrl.message.senderIsHuman}}\">\n        {{$ctrl.message.messageContent}}\n      </div>",
    bindings: {
        message: '<'
    }
});
