import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		if (!localStorage.getItem('cart_id')) {
	    	this.transitionTo('index');
		}
	}
});
