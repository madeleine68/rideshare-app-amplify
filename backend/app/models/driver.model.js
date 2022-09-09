module.exports = (sequelize, Sequelize) => {
    const DriverPlan = sequelize.define("drivers_entry", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      from: {
        type: Sequelize.STRING,
        allowNull: false
      },
      to: {
        type: Sequelize.STRING,
        allowNull: false
      },
      leavingAt:{
          type: Sequelize.DATEONLY, //"2016-10-02",
          allowNull: false
      },
      // arrivingAt:{
      //   type: Sequelize.DATEONLY// DATE equal to timestamp ex:'2016-06-22 19:10:25-07'
      // },
      leavingTime:{
        type: Sequelize.TIME, //"19:00:00",
        allowNull: false
      },
      // arrivingTime:{
      //   type: Sequelize.TIME
      // },
      seats:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amount:{
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    });
  
    return DriverPlan;
  };
  