import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isShowingContact: false,
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
    toggleContact() {
      this.toggleProperty('isShowingContact');
    }
  }
});
