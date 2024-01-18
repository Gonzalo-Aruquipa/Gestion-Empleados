const express = require("express");

const employeeRoutes = require("./routes/employeeRoutes");
const depRoutes = require("./routes/departmentRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const { DB_URL } = process.env;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://root:4556@cluster0.n5lowos.mongodb.net/gestion");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employees", employeeRoutes);
app.use("/departments", depRoutes);
app.use("/users", userRoutes);

const port = 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})
