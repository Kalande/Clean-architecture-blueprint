export class MessageAlreadyUsedException extends Error {
  constructor() {
    super("Message already used, please generate another one.");
  }
}
