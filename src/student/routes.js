// store our student routes
const { Router } = require("express");

const controller = require("./controller");

// router object
const router = Router();

// create one route for getting all students
router.get("/", controller.getStudents);
// create a route for getting student by id
router.get("/:id",controller.getStudentById);
// create a route for adding students
router.post("/", controller.addStudent);
// create a route for deleting students
router.delete("/:id", controller.removestudent);
// router to update the students available in the database
router.put("/:id", controller.updatestudent);


module.exports = router;