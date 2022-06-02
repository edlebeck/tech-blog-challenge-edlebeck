const { Post } = require('../models');

const postdata = [
  {
    title: 'Printemps',
    text: 'Lorem baldfhiaosdfiu',
    user_id: 1,
  },
  {
    title: 'test2',
    text: 'Lorem baldfngnsfniu',
    user_id: 1,
  },
  {
    title: 'P634td',
    text: 'Lorem baldfhidsjsjrmnntaosdfiu',
    user_id: 1,
  },
  {
    title: 'Pyrah',
    text: 'Lorem baldfhidfnsreyufdjaosdfiu',
    user_id: 2,
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
