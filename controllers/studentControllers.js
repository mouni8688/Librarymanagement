const Student = require("../models/Student");

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.render("students", { students });
};

exports.addStudent = async (req, res) => {
  const { rollNo, name, email } = req.body;
  await Student.create({ rollNo, name, email });
  res.redirect("/students");
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
};

exports.getEditStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("editStudent", { student });
};

exports.updateStudent = async (req, res) => {
  const { rollNo, name, email } = req.body;
  await Student.findByIdAndUpdate(req.params.id, {
    rollNo,
    name,
    email
  });
  res.redirect("/students");
};
