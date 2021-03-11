import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SuperTextareaComponent extends Component {
  max;
  @tracked text;
  constructor() {
    super(...arguments);
    this.text = this.args.value;
    this.max=this.args.maxLength;
  }
  get size() {
    if (this.text)
      return this.text.length;
    return 0;
  }
  get isFull() {
    return this.max <= this.size;
  }
}
