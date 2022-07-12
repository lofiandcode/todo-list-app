const Pool = require('pg').Pool;

const pool = new Pool({
    user: "josephtrettevik",
    password: "",
    host: "localhost",
    port: 5432,
    database: 'todo_list_app'
});

module.exports = pool;