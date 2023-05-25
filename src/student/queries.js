// this is where we will store all our sql queries
// querying all students
const getStudents = "SELECT * FROM students";

// querying students by ID
const getStudentById = "SELECT * FROM students WHERE id = $1";

module.exports = {
    getStudents,
    getStudentById,
};