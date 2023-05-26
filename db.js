// this is where we connect to our postgresql database
const Pool = require('pg').Pool;


// Create a pool object
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"Justus#123",
    port:5433,
});

// export the pool
module.exports = pool;