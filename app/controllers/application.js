import Ember from 'ember';
import config from '../config/environment';
import marketcloud from 'marketcloud';

marketcloud.public = config.site.headers['Authorization'];

export default Ember.Controller.extend({
	config: config,
	init: function(){
		
		Ember.$('body').on('click','.dropdown-menu', function(e){
			e.stopPropagation();
		});

		Ember.$(window).on('scroll', function(){
			if (Ember.$(window).scrollTop() > 119) {
				Ember.$('nav').addClass('scrolled');
			}
			else {
				Ember.$('nav').removeClass('scrolled');
			}
		});
	},
	cart: localStorage.cart_id,
});
