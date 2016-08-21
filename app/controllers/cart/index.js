import Ember from 'ember';

export default Ember.Controller.extend({
	cart: Ember.inject.service('shopping-cart'),
	init(){
		var data = this.get('cart').carts.data.items;
		var total = 0;
		Ember.$.each(data, function(){
			var price = (this.price_discount) ? this.price_discount : this.price;
			total += parseInt(price) * parseInt(this.quantity);
		});
		this.set('total', total);
	}
});
