const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('firstapi', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});




const getAllUsers = async (req, res) => {
    // const response = await pool.query("SELECT * FROM users");
    // console.log(response.rows);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

module.exports = {
    getAllUsers
}