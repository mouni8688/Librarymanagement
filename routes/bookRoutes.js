const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookControllers");

router.get("/", bookController.getBooks);
router.post("/add", bookController.addBook);
router.get("/delete/:id", bookController.deleteBook);
router.get("/edit/:id", bookController.getEditBook);
router.post("/edit/:id", bookController.updateBook);


module.exports = router;
