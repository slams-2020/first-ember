import Route from '@ember/routing/route';
import { action, set } from '@ember/object';

export default class HelloRoute extends Route {
  model() {
    return { message: 'Hello', to: 'World' };
  }

  @action reset(m) {
    set(m, 'message', '');
  }
}
