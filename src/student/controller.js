// this is where we will store our business logic related to each route
const pool = require("../../db");

const getStudents = (req,res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
module.exports = {
    getStudents,

};