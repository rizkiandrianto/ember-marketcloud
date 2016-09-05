import Ember from 'ember';
import marketcloud from 'marketcloud';

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
	},
	actions: {
		checkout(){
			const email = `${this.get('email')}`,
				fullname = `${this.get('fullname')}`,
				phone = `${this.get('phone')}`,
				address = `${this.get('address')}`,
				city = Ember.$('#city-select option:selected').text(),
				province = Ember.$('#province-select option:selected').text(),
				// country = `${this.get('country')}`,
				country = 'Indonesia',
				postal = `${this.get('postal')}`,

			new_address = {
				email: email,
				full_name: fullname,
				phone: phone,
				address1: address,
				city: city,
				province: province,
				country: country,
				postal_code: postal
			}, 

			cart = JSON.parse(localStorage.getItem('cart_items')),

			items = [];

			console.log(cart);
			Ember.$.each(cart, function(x, y){
				items.push({
					product_id : y.product_id, 
					quantity: y.quantity
				})
			});

			var the_order = {
						    shipping_address : new_address,
						    billing_address : new_address,
						    items: items
  						}

			// marketcloud.users.authenticate('rizki_andrianto@rocketmail.com','B6625SHM',
			//   function(err,data){
			//     //data.user contains user data
			//     console.log(data)
			// })

			/*marketcloud.addresses.create(new_address,function(err,address){
				console.info(address);
			});*/

			marketcloud.orders.create(the_order,function(err,data){
				console.log(data);
				localStorage.getItem('cart_items');
				localStorage.getItem('cart_id');
				location.reload();
  			});
		}
	}
});
