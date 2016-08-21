import Ember from 'ember';

export function truncate([params, count]) {
  	if (params.length > count) {
		return params.substring(0, count) + '...';
	}
  	return params;
}

export default Ember.Helper.helper(truncate);
