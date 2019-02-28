import { ServiceMessageObject } from '../typescript/interfaces.message-container';


class MessageService {
  constructor(private $http: ng.IHttpService){}
  sendMessageAPI:string = 'http://localhost:5001/sendMessage';

  sendMessage = async function (messageObj: ServiceMessageObject) {
    try {
      const payload = await this.$http.post(this.sendMessageAPI, messageObj);
      return payload.data;
    } catch (err) {
      console.error(err)
    }
  };
};

angular
  .module('pokeWeakApp')
  .service('MessageService', ["$http", MessageService])