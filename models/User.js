// const pls = require('passport-local-sequelize');
// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');
// const bcrypt = require("bcrypt");

// const User = pls.defineUser(sequelize, {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// })

// module.exports = User

const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };