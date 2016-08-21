import Ember from 'ember';
import marketcloud from 'marketcloud';
const { getOwner } = Ember;

export default Ember.Component.extend({
	toast: Ember.inject.service(),
	shopping: Ember.inject.service('shopping-cart'),
	actions: {
		addToCart(id, event){
			var parent = Ember.$(event.target).closest('li.product-loop-li.' + id );
			const cart = getCookie('cart_id');
			this.toast.info('Adding to Cart...', 'Please wait', {
				progressBar: false,
				timeOut: 0
			});
			if (cart === '' || cart === null) {
				marketcloud.carts.create({
				  	items:[{'product_id':id,'quantity':1}]
				},(err,cart)=>{
					if (err) {
						toastAdded(this.get('toast'), err)	
						setCookie('cart_id', cart.id);
					} else {
						toastAdded(this.get('toast'));
						addedToCart(parent, id);
						this.get('shopping').init();
					}
				});
			}
			else {
				marketcloud.carts.add(cart,[{'product_id':id,'quantity':1}],(err,cart)=>{
					if (err) {
						toastAdded(this.get('toast'), err)
					} else {
						toastAdded(this.get('toast'));
						addedToCart(parent, id);
						this.get('shopping').init();
					}
				});
			}
		}
	}
});

function addedToCart(parent, id){
	Ember.$('.list-group.cart-list').each(function(){
		var product = Ember.$(this).find('.list-group-item.' + id);

		if (product.length) {
			product.find('span.quantity').text(parseInt(product.find('span.quantity').text()) + 1);
		}
		else {
			Ember.$(this).append(`
				<div class="list-group-item clearfix ` + id + `">
					<div class="col-md-3">
							<div style="` + parent.find('.product-thumbnail').attr('style') + `" class="product-thumbnail">
							</div>
					</div>
					<div class="col-md-8">
						<p>` + parent.find('.product-name').text() + `</p>
						<div class="cart-price">
								<p class="price">` + parent.find('.product-price').text() + `</p>
							<p>x <span class="quantity">1</span>  
								<i aria-hidden="" class="ml10 mr5 cursorPointer f10 ember-view fa fa-minus"></i> 
								<i aria-hidden="" class="cursorPointer f10 ember-view fa fa-plus"></i>
							</p>
						</div>
					</div>
					<div class="col-md-1">
						<p class="text-right"><i class="text-danger right cursorPointer ember-view fa fa-times"></i></p>
					</div>
				</div>
			`)
		}
	})
}