const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

router.get("/", studentController.getStudents);
router.post("/add", studentController.addStudent);
router.post("/add", studentController.addStudent);
router.get("/delete/:id", studentController.deleteStudent);
router.get("/edit/:id", studentController.getEditStudent);
router.post("/edit/:id", studentController.updateStudent);


module.exports = router;
