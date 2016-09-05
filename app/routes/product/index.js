import Ember from 'ember';
import Config from '../../config/environment';

export default Ember.Route.extend({
	model(){
		return Ember.$.getJSON({
	    	url : Config.site.api + Config.site.endpoint + 'products', 
	  		headers: Config.site.headers,
	 		async: false,
	    }).then(data => {
	    	console.log(data);
	      return data;
	    });
	}
});
