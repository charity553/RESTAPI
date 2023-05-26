// this is where we will store all our sql queries
// querying all students
const getStudents = "SELECT * FROM students";

// querying students by ID
const getStudentById = "SELECT * FROM students WHERE id = $1";

// querying to add student, but first we have to search for the email of the student if it exists
const checkEmailExists = "SELECT s  FROM students s WHERE s.email = $1";
const addStudent = "INSERT INTO students (name,email, age, dob) VALUES ($1, $2, $3, $4)";

// query to delete / remove student from database
const removestudent = "DELETE FROM students WHERE id = $1";

// query to update students
const updatestudent = "UPDATE students SET name = $1 WHERE id = $2";
module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removestudent,
    updatestudent,
};