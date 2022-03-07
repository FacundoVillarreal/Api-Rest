import  Sequelize  from "sequelize";

//cadena de conexion
export const sequelize = new Sequelize(
    'apirest',//database name
    'postgres',//username
    'postgres',//pass
    //config para sequelize
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 6,
            min: 0,
            require: 30000,
            idle: 10000
        },
        loggin: false
    }

)