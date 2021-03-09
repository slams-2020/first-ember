import { tracked } from '@glimmer/tracking';

export default class Message {
  MAX = 10;
  @tracked text;
  to;
  constructor(text, to) {
    this.text = text;
    this.to = to;
  }

  get size() {
    return this.text.length;
  }

  get isFull(){

  }
}
