var messageContainerCtrl = /** @class */ (function () {
    function messageContainerCtrl(MessageService, $scope) {
        this.MessageService = MessageService;
        this.$scope = $scope;
        this.validMessages = 1;
        this.userInputMessage = '';
        this.messages = [
            {
                senderIsHuman: false,
                messageContent: 'Hello there! How may I help you?',
                sentUtcTime: 1550786221589
            },
        ];
    }
    return messageContainerCtrl;
}());
;
angular
    .module('pokeWeakApp')
    .component('messageContainer', {
    templateUrl: '/message-container.component.html',
    controller: messageContainerCtrl,
    controllerAs: "mesConVM"
});
