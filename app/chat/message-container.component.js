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
            var testElement = angular.element('messages');
            console.log(testElement);
            var messagesContainer = document.getElementsByTagName('messages')[0];
            scrollDown(messagesContainer);
            // replace with uuid
            var sessionId = '763435ca-ed1b-4b85-866f-db5d59081038';
            this.MessageService
                .sendMessage({ newMessage: newMessage, sessionId: sessionId })
                .then(function (dialogFlowResponse) {
                var text = dialogFlowResponse.text;
                var card = dialogFlowResponse.card;
                _this.messages[loadingMessageIndex] = card || text;
                // it is a mystery why this digest is necessary
                _this.$scope.$digest();
                // function to scroll to bottom of input box
                scrollDown(messagesContainer);
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
        var welcomeMessage = {
            senderIsHuman: false,
            messageContent: 'Hello there! How may I help you?',
            sentUtcTime: 1550786221589
        };
        this.messages.push(welcomeMessage);
    };
    return messageContainerCtrl;
}());
;
var scrollDown = function (element) {
    element.scrollTop = element.scrollHeight - element.clientHeight;
};
angular
    .module('pokeWeakApp')
    .component('messageContainer', {
    templateUrl: '/chat/message-container.tpl.html',
    controller: messageContainerCtrl,
    controllerAs: "ctrl"
});
