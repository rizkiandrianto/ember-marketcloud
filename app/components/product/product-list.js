import Ember from 'ember';

export default Ember.Component.extend({
	breakpoints: [
        {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 5,
            'slidesToScroll': 5,
          }
        },
        {
          'breakpoint': 960,
          'settings': {
            'slidesToShow': 4,
            'slidesToScroll': 4,
          }
        },
        {
          'breakpoint': 500,
          'settings': {
            'slidesToShow': 2,
            'slidesToScroll': 2,
            'infinite': true
          }
        }
    ],
});
