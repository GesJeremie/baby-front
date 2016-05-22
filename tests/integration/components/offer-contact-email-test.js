import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('offer-contact-email', 'Integration | Component | offer contact email', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{offer-contact-email}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#offer-contact-email}}
      template block text
    {{/offer-contact-email}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
