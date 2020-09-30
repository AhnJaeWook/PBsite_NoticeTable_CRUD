'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize,Sequelize);
db.VideoTable = require('./VideoTable')(sequelize,Sequelize);
db.NoticeTable = require('./NoticeTable')(sequelize,Sequelize);
db.VideoTable_Category = require('./VideoTable_Category')(sequelize,Sequelize);
db.NoticeTable_Category = require('./NoticeTable_Category')(sequelize,Sequelize);
// 외래키 추가
db.User.hasMany(db.VideoTable,{foreignKey:"User_id",sourceKey:"id"});
db.VideoTable.belongsTo(db.User,{foreignKey:"User_id",targetKey:"id"});

db.User.hasMany(db.NoticeTable,{foreignKey:"User_id",sourceKey:"id"},);
db.NoticeTable.belongsTo(db.User,{foreignKey:"User_id",targetKey:"id"});

db.NoticeTable_Category.hasMany(db.NoticeTable,{foreignKey:"Notice_Category_Id",sourceKey:"id"});
db.NoticeTable.belongsTo(db.NoticeTable_Category,{foreignKey:"Notice_Category_Id",targetKey:"id"});

db.VideoTable_Category.hasMany(db.VideoTable,{foreignKey:"Video_Category_Id",sourceKey:"id"});
db.VideoTable.belongsTo(db.VideoTable_Category,{foreignKey:"Video_Category_Id",targetKey:"id"});

// 외래키 끝

module.exports = db;
