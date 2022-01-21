export class Todo {
  id: number;
  text: string;
  complete: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Math.random();
    this.complete = false;
  }
}
