const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

/* ======================
   MIDDLEWARES
====================== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "library_secret_key",
  resave: false,
  saveUninitialized: false
}));

/* ======================
   VIEW ENGINE
====================== */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ======================
   STATIC FILES
====================== */
app.use(express.static(path.join(__dirname, "public")));

/* ======================
   ROUTES
====================== */
app.use("/", require("./routes/authRoutes")); // /login , /logout

app.use("/books", require("./routes/bookRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/issues", require("./routes/issueRoutes"));

/* ======================
   ROOT REDIRECT
====================== */
app.get("/", (req, res) => {
 if (req.session.admin) {
    res.redirect("/books");
  } else {
    res.redirect("/login");
  }
});

/* ======================
   SERVER
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at: http://localhost:${PORT}`)
);
