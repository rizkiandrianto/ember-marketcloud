import Ember from 'ember';
import Config from '../config/environment';

export default Ember.Service.extend({
	init(){
		Ember.$.getJSON({
	    	url : Config.site.api + Config.site.endpoint + 'carts/' + getCookie('cart_id'), 
	  		headers: Config.site.headers,
	 		async: false,
	    }).then(data => {
	      this.set('carts', data);
	    });
	}
});
