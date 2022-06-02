const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Hello',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Helloword',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Hello',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Hello2',
    user_id: 2,
    post_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
