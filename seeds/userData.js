const { User } = require('../models');

const userdata = [
  {
    username: 'Alan',
    password: 'testtest',
  },
  {
    username: 'test',
    password: 'testtest',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;