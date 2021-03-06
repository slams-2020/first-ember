import EmberRouter from '@ember/routing/router';
import config from 'firstproject/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('hello', function () {
    this.route('message');
  });
  this.route('message');
  this.route('testSuper');
});
