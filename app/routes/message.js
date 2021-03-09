import Route from '@ember/routing/route';
import Message from '../classes/message';
import { action } from '@ember/object';

export default class MessageRoute extends Route {
  model() {
    return new Message('Hello', 'all');
  }

  @action reset(m) {
    m.text = '';
  }
}
