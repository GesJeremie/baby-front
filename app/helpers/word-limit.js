import Ember from 'ember';

export function wordLimit(params) {
  var text = params[0],
    limit = params[1] || 40,
    separator = params[2] || ' ...'

  if (text.length <= limit) return text;

  return text.split(' ').slice(0, limit).join(' ') + separator;
}

export default Ember.Helper.helper(wordLimit);
