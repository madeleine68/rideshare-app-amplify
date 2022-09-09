//https://www.carpages.ca/ontario/london/used-cars/
// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
module.exports = (sequelize, Sequelize) => {
    const DriverPlan = sequelize.define('modir', {
      email: {
        type: Sequelize.STRING,
        validate: { isEmail: true, len: [2,60] },
        unique: true,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  
    return DriverPlan;
  };
  