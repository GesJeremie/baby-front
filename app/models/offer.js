import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  firstname: attr(),
  lastname: attr(),
  description: attr(),
  age: attr(),
  email: attr(),
  phone: attr(),
  avatar: attr()
});
