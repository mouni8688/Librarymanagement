const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issueControllers");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/", isAuthenticated, issueController.getIssues);
router.post("/add", isAuthenticated, issueController.issueBook);
router.get("/return/:id", isAuthenticated, issueController.returnBook);

module.exports = router;
