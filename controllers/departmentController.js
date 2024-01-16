const Department = require("../models/Department");

exports.newDepartment = async (req, res) => {
  const department = new Department(req.body);
  try {
    await department.save();
    res.status(200).send({ message: "Department created Successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
