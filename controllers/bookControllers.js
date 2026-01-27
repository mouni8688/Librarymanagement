const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.render("books", { books });
};

exports.addBook = async (req, res) => {
  const { title, author, quantity } = req.body;
  await Book.create({ title, author, quantity });
  res.redirect("/books");
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/books");
};

exports.getEditBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("editBook", { book });
};

exports.updateBook = async (req, res) => {
  const { title, author, quantity } = req.body;
  await Book.findByIdAndUpdate(req.params.id, {
    title,
    author,
    quantity
  });
  res.redirect("/books");
};
