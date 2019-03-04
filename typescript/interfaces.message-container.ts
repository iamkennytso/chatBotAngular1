export interface Message {
  senderIsHuman: boolean,
  messageContent: string,
  sentUtcTime: number,
}

export interface Card {
  title: string,
  subtitle: string,
  imageUri: string, 
  buttons: [{
    text: string,
    postback: string,
  }]
}
export interface SendMessageReponseData {
  text: Message,
  card?: Card,
}
export interface ServiceMessageObject {
  newMessage: string,
  sessionId: string,
}