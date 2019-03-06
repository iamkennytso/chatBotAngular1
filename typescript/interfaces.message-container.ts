export interface Message {
  senderIsHuman: boolean,
  messageContent: any,
  sentUtcTime: number,
}

export interface CardContent {
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
  card?: CardContent,
}
export interface ServiceMessageObject {
  newMessage: string,
  sessionId: string,
}