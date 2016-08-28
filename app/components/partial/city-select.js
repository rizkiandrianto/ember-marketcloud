import Ember from 'ember';
import Config from '../../config/environment';

export default Ember.Component.extend({
	willRender(){
		Ember.$.getJSON({
	    	url : Config.site.rajaongkir_url + Config.site.rajaongkir_endpoint + 'city', 
	  		headers: Config.site.rajaongkir_headers,
	 		async: false,
	    }).then(data => {
	      this.set('city', data.results);
	    });
	}
});
