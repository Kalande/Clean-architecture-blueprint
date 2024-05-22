import Message from "../entities/Message";

export default interface IMessageAPI {
  getAllMessages(): Promise<Message[]>;
  getMessageById(id: number): Promise<Message[]>;
}
