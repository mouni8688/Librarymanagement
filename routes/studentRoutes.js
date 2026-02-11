const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/", isAuthenticated, studentController.getStudents);
router.post("/add", isAuthenticated, studentController.addStudent);
router.get("/delete/:id", isAuthenticated, studentController.deleteStudent);
router.get("/edit/:id", isAuthenticated, studentController.getEditStudent);
router.post("/edit/:id", isAuthenticated, studentController.updateStudent);

module.exports = router;
