import { Card, Message, CardContent } from '../typescript/interfaces.message-container';

class messageContainerCtrl implements ng.IComponentController {
  constructor(private MessageService: ng.IServiceProviderClass, private $scope: ng.IScope) {
  }

  validMessages: number = 0;
  userInputMessage: string = '';
  messages: Message[] = [];
  
  $onInit(){
    const welcomeMessage: Message = {
      senderIsHuman: false,
      messageContent: 'Hello there! How may I help you?',
      sentUtcTime: 1550786221589,
    };
    this.messages.push(welcomeMessage);
  }

  handleUserSubmitMessage = function(): void {
    if (!(this.userInputMessage.trim())) {
      return;
    }
    const sentUtcTime: number = new Date().getTime();
    const newMessage: Message = {
      senderIsHuman: true,
      messageContent: this.userInputMessage,
      sentUtcTime,
    };
    const loadingMessage: Message = {
      senderIsHuman: false,
      messageContent: 'Loading...',
      sentUtcTime: sentUtcTime + 1,
    };
    const loadingMessageIndex: number = this.messages.length + 1;

    this.messages = [...this.messages, newMessage, loadingMessage];
    this.userInputMessage = '';
    
    const messagesContainer = document.getElementsByTagName('messages')[0];
    scrollDown(messagesContainer);
    // replace with uuid
    const sessionId: string = '763435ca-ed1b-4b85-866f-db5d59081038';

    this.MessageService
      .sendMessage({ newMessage, sessionId })
        .then(dialogFlowResponse => {
          const text: Message = dialogFlowResponse.text;
          const card: Message = dialogFlowResponse.card;
          this.messages[loadingMessageIndex] = card || text;
          // it is a mystery why this digest is necessary
          this.$scope.$digest();
          // function to scroll to bottom of input box
          scrollDown(messagesContainer);
        })
        .catch(err => {
          console.error(err)
          const errorMessage: Message = {
            senderIsHuman: false,
            messageContent: 'Something Broke!',
            sentUtcTime: sentUtcTime + 1,
          };
          this.messages[loadingMessageIndex] = errorMessage;
        });
  };
};

const scrollDown = (element): void => {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

angular
  .module('pokeWeakApp', ['ngMaterial'])
  .component('messageContainer', {
    templateUrl: '/message-container.component.html',
    controller: messageContainerCtrl,
    controllerAs: "ctrl",
  })