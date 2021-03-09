import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SuperTextareaComponent extends Component {
  @tracked text;
  constructor() {
    super(...arguments);
    this.text=this.args.value;
  }
  get size() {
    return this.text.length;
  }
}
