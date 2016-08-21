import Ember from 'ember';
import Config from '../../config/environment';

export default Ember.Component.extend({
	willRender(){
		Ember.$.getJSON({
	    	url : Config.site.api + Config.site.endpoint + 'products', 
	  		headers: Config.site.headers,
	 		async: false,
	 		data: {
	 			category_id: 73155
	 		}
	    }).then(data => {
	      this.set('man', data);
	    });
	}
});
