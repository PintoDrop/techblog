const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.JAWDN_URL || process.env.LOCALDB_URL);