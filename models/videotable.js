'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VideoTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  VideoTable.init({
    Video_Category_Id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    User_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    Content:{
      type:DataTypes.STRING,
      allowNull:false
    },
    Date: {
      type:DataTypes.DATE,
      allowNull:false
    },
    View_content: {
      type:DataTypes.INTEGER,
      // allowNull:false
    },
    Image:{
      type:DataTypes.STRING,
      // allowNull:false
    },
    Image_real: {
      type:DataTypes.STRING,
      // allowNull:false
    },
    Video_link: {
      type:DataTypes.STRING,
      allowNull:false
    }

  }, {
    sequelize,
    modelName: 'VideoTable',
  });
  return VideoTable;
};