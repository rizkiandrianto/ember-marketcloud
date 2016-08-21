import Ember from 'ember';
import Config from '../../config/environment';

export default Ember.Component.extend({
	willRender(){
		Ember.$.getJSON({
	    	url : Config.site.api + Config.site.endpoint + 'products', 
	  		headers: Config.site.headers,
	 		async: false,
	    }).then(data => {
	      this.set('latest', data);
	    });
	}
});
