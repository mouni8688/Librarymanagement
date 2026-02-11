const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookControllers");
const { isAuthenticated } = require("../middlewares/authMiddleware");

// PROTECTED ROUTES
router.get("/", isAuthenticated, bookController.getBooks);
router.post("/add", isAuthenticated, bookController.addBook);
router.get("/delete/:id", isAuthenticated, bookController.deleteBook);
router.get("/edit/:id", isAuthenticated, bookController.getEditBook);
router.post("/edit/:id", isAuthenticated, bookController.updateBook);

module.exports = router;
