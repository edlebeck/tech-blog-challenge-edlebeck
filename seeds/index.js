const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedComments = require('./commentData');
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComments();

  process.exit(0);
};

seedAll();
