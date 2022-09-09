const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db3 = {};

db3.Sequelize = Sequelize;
db3.sequelize = sequelize;

db3.modirha = require("./admin.model")(sequelize, Sequelize);
//added:
// let val =(sequelize, Sequelize) => {
//   const Tutorial = sequelize.define("tutorial", {
//     title: {
//       type: Sequelize.STRING
//     },
//     description: {
//       type: Sequelize.STRING
//     },
//     published: {
//       type: Sequelize.BOOLEAN
//     }
//   });

//   return Tutorial;
// };
// db.tutorials =val(sequelize, Sequelize)

module.exports = db3;
