// this is where we will store our business logic related to each route
const pool = require("../../db");
const queries = require("./queries");

// READ
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

// CREATE
const addStudent = (req, res) => {
    const {name,email, age, dob } = req.body;
    // query to check if email already exists in database
    pool.query(queries.checkEmailExists,[email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists!");
        }
    // query if the email does not exist. (registering a new one)
    // add student to database
    pool.query(queries.addStudent, [name, email,age,dob], (error, results) => {
        if (error) throw error;
        res.status(201).send("student created successfully!");
    });
    });
};

// DELETE
const removestudent = (req, res) => {
    const id = parseInt(req.params.id);
    // to delete a student, the student must exist in the database.(if student id does not exist)
    pool.query(queries.getStudentById, [id], (error, results) => {
        const nostudentFound = !results.rows.length;
        if (nostudentFound) {
            res.send("student does not exist, could not delete student!");
        }
    
        
    // if student id exist, then delete student from database
    pool.query(queries.removestudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("student deleted successfully!");
    });
    });
};

// UPDATE
const updatestudent = (req, res) => {
    // remove the id url of the student if they no longer exist in the database
    const id = parseInt(req.params.id);
    // update the student name
    const { name } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        // check if student exist in database
        const nostudentFound = !results.rows.length;
        if (nostudentFound) {
            res.send("student does not exist in database");
        }
    // if student does not exist, then update the database
    pool.query(queries.updatestudent, [name, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("student updated successfully!");
    });
    });
    

}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removestudent,
    updatestudent,
};