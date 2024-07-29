const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || "3001",

    /** DATABASE */
    database: {
      DB_HOST: process.env.DB_HOST || 'localhost',
      DB_USER: process.env.DB_USER || 'root',
      DB_PASS: process.env.DB_PASS || '1234',
      DB_NAME: process.env.DB_NAME || 'jumpLibrary',
      DB_PORT: process.env.DB_PORT || 3306,
      dialect: "mysql"
  }
}