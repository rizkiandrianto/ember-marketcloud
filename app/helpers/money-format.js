import Ember from 'ember';
import config from '../config/environment';

export function moneyFormat([number, currency, n, x]) {
  //return parseInt(params).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  var sitecurrency = (currency) ? config.site.currency : '';
  return sitecurrency + parseInt(number).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

export default Ember.Helper.helper(moneyFormat);
