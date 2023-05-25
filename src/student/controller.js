// this is where we will store our business logic related to each route
const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req,res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const {name,email, age, dob } = req.body;
    // query to check if email already exists in database
    pool.query(queries.checkEmailExists,[email], (error, results) => {
        
    })
}
module.exports = {
    getStudents,
    getStudentById,
    addStudent,

};