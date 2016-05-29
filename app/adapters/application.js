import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  // Application specific overrides go here
  namespace: 'api/v1',
  host: config.apiHost
});
