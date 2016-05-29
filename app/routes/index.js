import Ember from 'ember';

import ENV from 'front/config/environment';

export default Ember.Route.extend({
  model() {

    var tenantName = ENV.APP.tenantName;

    this.store.queryRecord('tenant', { filter: { name: tenantName } }).then(function(tenant) {
      debugger;
    });


    return this.store.findAll('offer');
  }
});
