const pls = require('passport-local-sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const bcrypt = require("bcrypt");

// const User = pls.defineUser(sequelize, {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// })

module.exports = User