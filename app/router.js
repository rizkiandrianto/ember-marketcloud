import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', function() {
    this.route('man');
    this.route('woman');
    this.route('detail', {path: '/:id'});
  });
  this.route('cart', function() {});
});

export default Router;
