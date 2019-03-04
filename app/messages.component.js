var messagesCtrl = /** @class */ (function () {
    function messagesCtrl() {
    }
    return messagesCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('messages', {
    template: "<div class=\"App-Paper-MessagesContainer\">\n        <individual-message ng-repeat=\"message in ctrl.messages\" message=\"message\"> </individual-message>\n      </div>",
    controller: messagesCtrl,
    controllerAs: "ctrl",
    bindings: {
        messages: '<'
    }
});
