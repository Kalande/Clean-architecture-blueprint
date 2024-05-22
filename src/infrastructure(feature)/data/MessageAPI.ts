import Message from "../../core/entities/Message";
import IMessageAPI from "../../core/interfaces/IMessageAPI";

const messages = [
  new Message({
    id: 1,
    text: "Hello, world!",
    available: true,
  }),
  new Message({
    id: 2,
    text: "Goodbye, world!",
    available: true,
  }),
  new Message({
    id: 3,
    text: "I am a message.",
    available: true,
  }),
  new Message({
    id: 4,
    text: "I am another message.",
  }),
];

export default class MessageAPI implements IMessageAPI {
  async getAllMessages(): Promise<Message[]> {
    return Promise.resolve(messages);
  }

  async getMessageById(id: number): Promise<Message[]> {
    const messagesById = messages.filter((message) => message.id === id);
    return Promise.resolve(messagesById);
  }
}
