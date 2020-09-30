'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoticeTable extends Model {
    static associate(models) {
    }
  };
  NoticeTable.init({
    Notice_Category_Id:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    User_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    Content:{
      type:DataTypes.STRING,
      allowNull:false
    },
    Date:{
     type: DataTypes.DATE,
     allowNull:false
    },
    View_count: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'NoticeTable',
  });
  return NoticeTable;
};