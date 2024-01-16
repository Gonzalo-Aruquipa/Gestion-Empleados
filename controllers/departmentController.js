const Department = require("../models/Department");

exports.newDepartment = async (req, res) => {
  const department = new Department(req.body);
  try {
    await department.save();
    res.status(200).send("Department created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getIdDepartment = async (req, res, next) => {
  const department = await Department.findById(req.params.id);
  try {
    if (!department) {
      throw new Error("department not found");
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


exports.updateDepartment = async (req, res) => {
  try {
    let department = await Department.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(department);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.status(200).send("Department delete successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
