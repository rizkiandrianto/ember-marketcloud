import Ember from 'ember';

export function htmlParse(params/*, hash*/) {
	var d = document.createElement('div');
	d.innerHTML = params;
	return d.firstChild;
}

export default Ember.Helper.helper(htmlParse);
