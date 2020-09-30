'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  User.init({
    UserName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    UserID:{
      type:DataTypes.STRING,
      allowNull:false
    },
    UserPW:{
      type:DataTypes.STRING,
      allowNull:false
    },
    StudentNumber: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Access:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    WR_Access: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};