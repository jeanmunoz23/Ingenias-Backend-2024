const { Sequelize } = require('sequelize');
const { database } = require('../config');

// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config()
// const database ={
//   DB_HOST: process.env.DB_HOST || 'localhost',
//   DB_USER: process.env.DB_USER || 'root',
//   DB_PASS: process.env.DB_PASS || '1234',
//   DB_NAME: process.env.DB_NAME || "jump",
//   DB_PORT: process.env.DB_PORT || "3306",
//   dialect:  process.env.DB_DIALECT || "mysql",
// }
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('northwind', 'root', '1234', {
//     host: 'localhost',
//     dialect: 'mysql' 
//   });
const sequelize = new Sequelize(database.DB_NAME, database.DB_USER , database.DB_PASS, {
  host: database.DB_HOST,
  dialect: database.dialect 
});

// async function connect(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         } catch (error) {
//         console.error('Unable to connect to the database:', error);
//         }
// } 
// async function disconnect(){
//     try {
//         await sequelize.authenticate();
//         console.log('Clouse Connection.');
//         } catch (error) {
//         console.error('Unable Clouse to connect to the database:', error);
//         }
// } 
// module.exports = {connect, disconnect}

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

sequelize.close().then(() => {
  console.log('Clouse Connection.');
}).catch((error) => {
  console.error('Unable clouse to Connection to the database: ', error);
});

module.exports = sequelize;