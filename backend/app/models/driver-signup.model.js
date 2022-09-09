//https://www.carpages.ca/ontario/london/used-cars/
// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
module.exports = (sequelize, Sequelize) => {
    const DriverPlan = sequelize.define("driversignup", {
      id_u:{
        type: Sequelize.BIGINT, 
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [2,40]
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: { isEmail: true, len: [2,60] },
        unique: true,
        allowNull: false,
        // type: Sequelize.STRING,
        
        
        // unique: true,
        // validate:{
        //     len: [2,40]
        // }
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone:{
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        validate:{
            min: 0 ,
            len: [1,10] 
          }
      }
      ,
      category: {
        type: Sequelize.STRING,
        allowNull: false//commercial, SUV, RV, Truck
      },
      make:{
          type: Sequelize.STRING, //"Honda"
          allowNull: false
      },
      model:{
        type: Sequelize.STRING, //"civic",
        allowNull: false
      },
      year:{
        type: Sequelize.INTEGER,//1999
        allowNull: false,
        validate:{
          min: 0  
        }
      },
      kilometers:{
        type: Sequelize.INTEGER,//32000
        allowNull: false,
        validate:{
          min: 0  
        }
      },
      rating:{
        type: Sequelize.DECIMAL,//4.8
        validate:{
            min: 0,
            max:5 
          }
      },
      trips:{
        type: Sequelize.INTEGER, //256
        validate:{
          min:0
        }
      },
      plateNum :{
          type: Sequelize.STRING,
          allowNull: false,//AZ2345
          unique: true
      },
      status:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      moreInfo:{
        type: Sequelize.STRING,
      },
      licenceNum:{
        type: Sequelize.STRING,
        allowNull: false,//AZ2345
        unique: true
      }

    });
  
    return DriverPlan;
  };
  