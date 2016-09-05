import Ember from 'ember';
import Config from '../config/environment';

export default Ember.Service.extend({
	init(){
		Ember.$.getJSON({
	    	url : Config.site.api + Config.site.endpoint + 'carts/' + localStorage.cart_id, 
	  		headers: Config.site.headers,
	 		async: false,
	    }).then(data => {
	      this.set('carts', data);
	      localStorage.setItem('cart_items', JSON.stringify(data.data.items));
	    });
	}
});
