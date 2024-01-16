const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const departmentSchema = new Schema({
  name: {
    type: String,
    trim: true
  },

})

module.exports = model("Department", departmentSchema);
