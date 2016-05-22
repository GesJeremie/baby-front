import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  emailContact: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  phoneContact: [
    validator('presence', true),
    validator('number', { allowString: true, integer: true }),
    validator('length', { is: 10 })
  ],
  messageContact: [
    validator('presence', true),
    validator('length', { min: 50 })
  ]
});

export default Ember.Component.extend(Validations, {

  store: Ember.inject.service(),

  isShowingContact: false,

  isContactFormValid: Ember.computed('emailContact', 'phoneContact', 'messageContact', function() {

    const { m, validations } = this.validateSync();
    return validations.get('isValid');

  }),

  isButtonContactDisabled: Ember.computed('isContactFormValid', function() {

    if (this.get('isContactFormValid')) return null;
    return false;

  }),

  isShowingPhone: false,


  actions: {

    offerShow(currentOffer) {
      var store = this.get('store');

      // Reset isShowing of every offer to false
      store.peekAll('offer').forEach(function(offer) {
        if (offer.get('isShowing')) {
          offer.set('isShowing', false);
        }
      });

      currentOffer.set('isShowing', true);
    },

    toggleContactEmail() {
      this.toggleProperty('isShowingContact');
    },

    toggleContactPhone() {
      this.toggleProperty('isShowingPhone');
    },

    submitContactEmail() {

      var store = this.get('store').createRecord('offer-contact', {
        email: this.get('emailContact'),
        phone: this.get('phoneContact'),
        message: this.get('messageContact'),
        offer_id: this.get('offer.id')
      });

      store.save()
        .then(function(offer) {
          debugger;
        })
        .catch(function(reason) {
          debugger;
        });
    }

  }
});
