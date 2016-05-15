/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstname: faker.name.firstName,
  lastname: faker.name.lastName,
  description: faker.lorem.paragraphs(),
  age: faker.list.random(18, 20, 56, 30, 21, 32),
  email: faker.internet.email,
  phone: faker.phone.phoneNumber(),
  avatar() {
    var width = faker.random.number({ min: 200, max: 400 }),
      height = faker.random.number({ min: 200, max: 400 });

    return faker.image.imageUrl(width, height);
  }
});
