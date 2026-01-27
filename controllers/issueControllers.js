const Issue = require("../models/Issue");
const Book = require("../models/Book");
const Student = require("../models/Student");

// GET Issues Page
exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("book")
      .populate("student");

    const issued = issues.filter(
      i => i.status === "issued" && i.book && i.student
    );

    const returned = issues.filter(
      i => i.status === "returned" && i.book && i.student
    );

    const books = await Book.find();
    const students = await Student.find();

    res.render("issues", {
      issued,
      returned,
      books,
      students
    });
  } catch (err) {
    console.error(err);
    res.send("Error loading issues page");
  }
};

// ISSUE BOOK
exports.issueBook = async (req, res) => {
  try {
    const { book, student } = req.body;

    const selectedBook = await Book.findById(book);
    if (!selectedBook || selectedBook.quantity <= 0) {
      return res.send("Book not available");
    }

    await Issue.create({
      book,
      student,
      status: "issued"
    });

    await Book.findByIdAndUpdate(book, {
      $inc: { quantity: -1 }
    });

    res.redirect("/issues");
  } catch (err) {
    console.error(err);
    res.send("Error issuing book");
  }
};

// RETURN BOOK
exports.returnBook = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue || issue.status === "returned") {
      return res.redirect("/issues");
    }

    issue.status = "returned";
    issue.returnDate = new Date();
    await issue.save();

    await Book.findByIdAndUpdate(issue.book, {
      $inc: { quantity: 1 }
    });

    res.redirect("/issues");
  } catch (err) {
    console.error(err);
    res.send("Error returning book");
  }
};
