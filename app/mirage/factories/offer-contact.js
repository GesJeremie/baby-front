/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  offer_id: faker.random.number(10000),
  email: faker.internet.email,
  phone: faker.phone.phoneNumber(),
  message: faker.lorem.paragraphs()
});
