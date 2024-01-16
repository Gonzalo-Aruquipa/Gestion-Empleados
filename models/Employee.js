const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  cellphone: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  department: {
    type: Schema.ObjectId,
    ref: "Department"
  },
});

module.exports = model("Employee", employeeSchema)
