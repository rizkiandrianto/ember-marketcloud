import Ember from 'ember';
import Config from '../config/environment';
import marketcloud from 'marketcloud';

export default Ember.Component.extend({
	toast: Ember.inject.service(),
	cart: localStorage.cart_id,
	loading: true,
	shopping: Ember.inject.service('shopping-cart'),
	willRender(){
		this.set('carts', this.get('shopping').carts);
	},
	actions: {
		adding(id){
			marketcloud.carts.add(this.get('cart'),[{'product_id':id,'quantity':1}],(err,cart)=>{
				this.get('shopping').init();
				this.rerender();
			});
		},
		removing(id, quantity){
			if (quantity === 1) {
				marketcloud.carts.remove(this.get('cart'),[{'product_id':id}],(err,cart)=>{
					this.get('shopping').init();
					this.rerender();
				});
			}
			else {
				marketcloud.carts.update(this.get('cart'),[{'product_id':id,'quantity':parseInt(quantity)-1}],(err,cart)=>{
					this.get('shopping').init();
					this.rerender();
				});
			}

		},
		removeProduct(id){
			marketcloud.carts.remove(this.get('cart'),[{'product_id':id}],(err,cart)=>{
				this.get('shopping').init();
				this.rerender();
			});
		},
		changeQuantity(id, quantity, event) {
			//var newValue = event.target.value;
			console.log(event);
			console.log(id + ' ' + quantity);
			/*marketcloud.carts.update(this.get('cart'),[{'product_id':id,'quantity':value}]
			,function(err,cart){
			});*/
	    }
	},
});