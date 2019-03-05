var messagesCtrl = /** @class */ (function () {
    function messagesCtrl() {
    }
    messagesCtrl.prototype.$onChanges = function (changeObject) {
        if (changeObject && changeObject.messages) {
            this.validMessages++;
        }
    };
    return messagesCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('messages', {
    template: "<div class=\"App-Paper-MessagesContainer\">\n        <individual-message ng-repeat=\"message in ctrl.messages\" message=\"message\"> </individual-message>\n      </div>",
    controller: messagesCtrl,
    controllerAs: "ctrl",
    bindings: {
        messages: '<',
        validMessages: '='
    }
});
