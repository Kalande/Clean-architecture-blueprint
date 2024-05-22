import Message from "../entities/Message";
import IMessageAPI from "../interfaces/IMessageAPI";

export default class SearchMessageUseCase {
  private messageAPI: IMessageAPI;

  constructor(messageAPI: IMessageAPI) {
    this.messageAPI = messageAPI;
  }

  async executeForAll(): Promise<Message[]> {
    const messages = await this.messageAPI.getAllMessages();
    return Promise.resolve(messages);
  }

  async executeForId(id: number): Promise<Message[]> {
    const messages = this.messageAPI.getMessageById(id);
    return Promise.resolve(messages);
  }
}
