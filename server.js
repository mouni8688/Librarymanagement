const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/books", require("./routes/bookRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/issues", require("./routes/issueRoutes"));

app.get("/", (req, res) => res.redirect("/books"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at: http://localhost:${PORT}`));