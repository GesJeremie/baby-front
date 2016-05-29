import Ember from 'ember';
import TenantInitializer from 'front/initializers/tenant';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | tenant', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  TenantInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
