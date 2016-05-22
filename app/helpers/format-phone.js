import Ember from 'ember';

/**
 * Will format a french phone number
 */
export function formatPhone(params /*, hash*/ ) {
  var phone = params[0];

  return phone.match(/.{1,2}/g).join('.');
}

export default Ember.Helper.helper(formatPhone);
