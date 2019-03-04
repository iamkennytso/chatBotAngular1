import { ServiceMessageObject, SendMessageReponseData } from '../typescript/interfaces.message-container';


class MessageService {
  constructor(private $http: ng.IHttpService){}
  sendMessageAPI:string = 'http://localhost:5001/sendMessage';

  sendMessage = async function (messageObj: ServiceMessageObject) {
    try {
      const response = await this.$http.post(this.sendMessageAPI, messageObj);
      const payload: SendMessageReponseData = response.data
      return payload;
    } catch (err) {
      console.error(err);
    };
  };
};

angular
  .module('pokeWeakApp')
  .service('MessageService', ["$http", MessageService])