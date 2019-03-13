// import { 
//   Card, 
//   Message,
// } from '../typescript/interfaces.message-container'
// class messageContainerController {
//   constructor(private MessageService, private $scope) {
//   }
//   validMessages = 1;
//   userInputMessage = '';
//   messages = [
//     {
//       senderIsHuman: false,
//       messageContent: 'Hello there! How may I help you?',
//       sentUtcTime: 1550786221589,
//     },
//   ];
//   handleUserSubmitMessage = function(): void {
//     if (!(this.userInputMessage.trim())) {
//       return;
//     }
//     const sentUtcTime: number = new Date().getTime();
//     // const { messagesContainer } = this.messages;
//     const newMessage: Message = {
//       senderIsHuman: true,
//       messageContent: this.userInputMessage,
//       sentUtcTime,
//     };
//     const loadingMessage: Message = {
//       senderIsHuman: false,
//       messageContent: 'Loading...',
//       sentUtcTime: sentUtcTime + 1,
//     };
//     const loadingMessageIndex: number = this.messages.length + 1;
//     this.messages = [...this.messages, newMessage, loadingMessage];
//     this.userInputMessage = '';
//     // messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
//     // replace with uuid
//     const sessionId: string = '763435ca-ed1b-4b85-866f-db5d59081038';
//     this.validMessages++;
//     this.MessageService
//       .sendMessage({ newMessage, sessionId })
//         .then(dialogFlowResponse => {
//           const text: Message = dialogFlowResponse.text;
//           const card: Card = dialogFlowResponse.card;
//           // if (card) {
//             // const materialCard = <MessageCard data={card.messageContent} />
//             // messages[loadingMessageIndex] = { ...card, messageContent: materialCard };
//           // } else {
//             this.messages[loadingMessageIndex] = text;
//             this.validMessages++;
//             // it is a mystery why this digest is necessary
//             this.$scope.$digest();
//           // }
//           // function to scroll to bottom of input box
//           // messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
//         })
//         .catch(err => {
//           console.error(err)
//           const errorMessage: Message = {
//             senderIsHuman: false,
//             messageContent: 'Something Broke!',
//             sentUtcTime: sentUtcTime + 1,
//           };
//           this.messages[loadingMessageIndex] = errorMessage;
//         });
//   };
// };
// angular
//   .module('pokeWeakApp')
//   .controller('messageContainerController', messageContainerController)
