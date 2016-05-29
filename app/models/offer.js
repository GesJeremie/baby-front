import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  day_birthday: attr('number'),
  month_birthday: attr('number'),
  year_birthday: attr('number'),
  description: attr('string'),
  avatar: attr('string'),
  token: attr('string'),
  search: attr('string'),
  status: attr('string'),
  isShowing: attr('string', { defaultValue: false }),

  fullname: Ember.computed('firstname', 'lastname', function() {
    return this.get('firstname').capitalize() + ' ' + this.get('lastname').capitalize()
  }),

  age: Ember.computed('day_birthday', 'month_birthday', 'year_birthday', function() {
    var date = this.get('year_birthday') + '/' + this.get('month_birthday') + '/' + this.get('day_birthday');
    return moment().diff(date, 'years');
  })

});
