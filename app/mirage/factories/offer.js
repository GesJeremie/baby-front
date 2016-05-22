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
  phone: '0699245221',
  avatar: faker.list.cycle(
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/573b7962f3c9f.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/5730c457a6e57.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/572f9cdca9f31.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/572b19de86731.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/572602a276e0b.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/5703baa202cf1.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/56fa491d421f2.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/56e3147a9bd83.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/56e1510d912d4.jpeg',
    'http://www.babysittingbordeaux.fr/uploads/avatars/medium/56ddc168522db.png')
});
