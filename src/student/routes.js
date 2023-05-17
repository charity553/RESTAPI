// store our student routes
const { Router } = require("express");

const controller = require("./controller");

// router object
const router = Router();

// create one route for our router
router.get("/", () => controller.getStudents);

module.exports = router;