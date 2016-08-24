import Ember from 'ember';
import Config from '../../config/environment';

export default Ember.Route.extend({
	model(param){
		return Ember.$.getJSON({
	  		url : Config.site.api + Config.site.endpoint + 'products/' + param.id, 
	  		headers: Config.site.headers,
	 		async: false
		}).then(function(data) {
	  		return data.data;
	  });
	}
});
