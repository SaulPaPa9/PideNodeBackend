require("dotenv").config();

 const config =
{
    port : process.env.PORT || 3000,

    cors : process.env.CORS,

    adminDBUser : process.env.ADMIN_BD_USER,
    adminDBPassword : process.env.ADMIN_DB_PASSWORD,
    adminDBHost : process.env.ADMIN_DB_HOST,
    adminDBName : process.env.ADMIN_DB_NAME
}

module.exports = config;
