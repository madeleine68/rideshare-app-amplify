module.exports = (sequelize, Sequelize) => {
    const DriverPlan = sequelize.define("payment", {
        id_u:{
            type: Sequelize.BIGINT, 
            primaryKey: true,
            autoIncrement: true
        },
        payment_uuid:{
            type: Sequelize.UUID,
            // defaultValue: DataTypes.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true
        },
        // trip_id:{//comes from the drivers' entry uuid
        //     type: Sequelize.UUID,
        //     // defaultValue: DataTypes.UUIDV4,
        //     defaultValue: Sequelize.UUIDV4,
        //     allowNull: false,
        //     unique: true
        // },
        payer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // payer_id: {
        //     type: Sequelize.UUID,
        //     // defaultValue: DataTypes.UUIDV4,
        //     defaultValue: Sequelize.UUIDV4,
        //     allowNull: false,
        //     unique: true
        // },
        date: {
            type: Sequelize.DATEONLY, //"2016-10-02",
            allowNull: false
        },
        time:{
            type: Sequelize.TIME, //"19:00:00",
            allowNull: false
        },
        seats_booked:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        amount:{
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        drivers_name:{
            type: Sequelize.STRING,
            allowNull: false   
        },
        total_fare:{
            type: Sequelize.DECIMAL,
            allowNull: false  
        },
        wage:{
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        fee:{
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        profit:{// fee+ a percentage of the total fare
            type: Sequelize.DECIMAL,
            allowNull: false
        }
    });
  
    return DriverPlan;
  };
  