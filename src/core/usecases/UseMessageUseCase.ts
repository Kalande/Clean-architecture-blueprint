import Message from "../entities/Message";
import { MessageAlreadyUsedException } from "../exceptions/MessageAlreadyUsedException";

export default class UseMessageUseCase {
  async execute(message: Message): Promise<string> {
    // Usecase accesses business rules
    if (!message.canShowMessage()) {
      throw new MessageAlreadyUsedException();
    }
    return message.text;
  }
}
