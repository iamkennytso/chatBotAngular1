// import * as ng from 'angular';
var messageContainerCtrl = /** @class */ (function () {
    function messageContainerCtrl(MessageService, $scope) {
        this.MessageService = MessageService;
        this.$scope = $scope;
        this.validMessages = 0;
        this.userInputMessage = '';
        this.messages = [];
        this.handleUserSubmitMessage = function () {
            var _this = this;
            if (!(this.userInputMessage.trim())) {
                return;
            }
            var sentUtcTime = new Date().getTime();
            // const { messagesContainer } = this.messages;
            var newMessage = {
                senderIsHuman: true,
                messageContent: this.userInputMessage,
                sentUtcTime: sentUtcTime
            };
            var loadingMessage = {
                senderIsHuman: false,
                messageContent: 'Loading...',
                sentUtcTime: sentUtcTime + 1
            };
            var loadingMessageIndex = this.messages.length + 1;
            this.messages = this.messages.concat([newMessage, loadingMessage]);
            this.userInputMessage = '';
            // messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
            // replace with uuid
            var sessionId = '763435ca-ed1b-4b85-866f-db5d59081038';
            this.MessageService
                .sendMessage({ newMessage: newMessage, sessionId: sessionId })
                .then(function (dialogFlowResponse) {
                var text = dialogFlowResponse.text;
                var card = dialogFlowResponse.card;
                // if (card) {
                // const materialCard = <MessageCard data={card.messageContent} />
                // messages[loadingMessageIndex] = { ...card, messageContent: materialCard };
                // } else {
                _this.messages[loadingMessageIndex] = text;
                _this.messages = _this.messages.slice();
                // it is a mystery why this digest is necessary
                _this.$scope.$digest();
                // }
                // function to scroll to bottom of input box
                // messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
            })["catch"](function (err) {
                console.error(err);
                var errorMessage = {
                    senderIsHuman: false,
                    messageContent: 'Something Broke!',
                    sentUtcTime: sentUtcTime + 1
                };
                _this.messages[loadingMessageIndex] = errorMessage;
            });
        };
    }
    messageContainerCtrl.prototype.$onInit = function () {
        this.messages.push({
            senderIsHuman: false,
            messageContent: 'Hello there! How may I help you?',
            sentUtcTime: 1550786221589
        });
    };
    return messageContainerCtrl;
}());
;
angular
    .module('pokeWeakApp')
    .component('messageContainer', {
    templateUrl: '/message-container.component.html',
    controller: messageContainerCtrl,
    controllerAs: "ctrl"
});
