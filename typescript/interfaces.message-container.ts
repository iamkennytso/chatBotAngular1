export interface Message {
  senderIsHuman: boolean,
  messageContent: any,
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

export interface ServiceMessageObject {
  newMessage: string,
  sessionId: string,
}