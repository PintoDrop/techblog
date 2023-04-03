// const User = require('./User.js');

// router.use('/api', require('../userRoutes.js'))


// module.exports = { User };


const User = require("./User");
const Blog = require("./blog");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog };