const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issueControllers");

router.get("/", issueController.getIssues);
router.post("/add", issueController.issueBook);
router.get("/return/:id", issueController.returnBook);

module.exports = router;
