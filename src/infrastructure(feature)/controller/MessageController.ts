import SearchMessageUseCase from "../../core/usecases/SearchMessageUseCase";
import UseMessageUseCase from "../../core/usecases/UseMessageUseCase";
import MessageAPI from "../data/MessageAPI";
import MessageState from "./MessageState";

export default class MessageController {
  private messageState: MessageState;
  private searchMessageUsecase: SearchMessageUseCase;
  private useMessageUsecase: UseMessageUseCase;

  constructor() {
    const messageAPI = new MessageAPI();
    this.messageState = new MessageState();
    this.searchMessageUsecase = new SearchMessageUseCase(messageAPI);
    this.useMessageUsecase = new UseMessageUseCase();
  }

  async generateRandomMessage(): Promise<void> {
    try {
      const messages = await this.searchMessageUsecase.executeForAll();
      const randomIndex = Math.round(Math.random() * messages.length - 1);
      console.log("Random index: ", randomIndex);
      this.messageState.messageToDisplay = await this.useMessageUsecase.execute(
        messages[randomIndex]
      );
      window.prompt("Message displayed: ", this.messageState.messageToDisplay);
    } catch (error) {
      window.alert(error);
    }
  }
}
