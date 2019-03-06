import { ServiceMessageObject, SendMessageReponseData } from '../typescript/interfaces.message-container';


class MessageService implements ng.IComponentController {
  constructor(private $http: ng.IHttpService){}
  sendMessageAPI: string = 'http://localhost:5001/sendMessage';
  sendMessage = async function (messageObj: ServiceMessageObject): Promise <SendMessageReponseData> {
    try {
      const response: ng.IHttpResponse<SendMessageReponseData> = await this.$http.post(this.sendMessageAPI, messageObj);
      return response.data;
    } catch (err) {
      console.error(err);
    };
  };
};

angular
  .module('pokeWeakApp')
  .service('MessageService', ["$http", MessageService])