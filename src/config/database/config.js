const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.32.1',
    user: 'wsl_root',
    password: 'Hoangdao192@',
    database: 'sale_web_assignment'
});
connection.connect();

module.exports = connection;
