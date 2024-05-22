export default class Message {
  id: number;
  text: string;
  available: boolean;
  constructor({ id, text, available = false }: { id: number; text: string; available?: boolean }) {
    this.id = id;
    this.text = text;
    this.available = available;
  }

  // Business Rules In the Entity

  canShowMessage(): boolean {
    return this.available;
  }
}
