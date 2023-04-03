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

// const User = require('./User');
// const Blog = require('./Blog');

// User.hasMany(Blog, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Blog.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// module.exports = { User, Project };

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
