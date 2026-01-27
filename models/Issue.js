const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ["issued", "returned"],
    default: "issued"
  }
});

module.exports = mongoose.model("Issue", issueSchema);
