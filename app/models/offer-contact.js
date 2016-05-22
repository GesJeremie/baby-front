import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  offer_id: attr(),
  phone: attr(),
  email: attr(),
  message: attr()
});
