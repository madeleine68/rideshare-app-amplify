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

const db1 = {};

db1.Sequelize = Sequelize;
db1.sequelize = sequelize;

db1.drivers = require("./driver-signup.model")(sequelize, Sequelize);
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

module.exports = db1;
