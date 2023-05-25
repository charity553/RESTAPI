// store our student routes
const { Router } = require("express");

const controller = require("./controller");

// router object
const router = Router();

// create one route for our router
router.get("/", controller.getStudents);
// create a route for getting student by id
router.get("/:id",controller.getStudentById);
router.post("/", controller.addStudent);

module.exports = router;