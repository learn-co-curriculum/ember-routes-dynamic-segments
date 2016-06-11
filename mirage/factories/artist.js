import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  genre: faker.company.bsBuzz
});
