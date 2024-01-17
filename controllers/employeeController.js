const Employee = require("../models/Employee");

exports.newEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(200).send("Employee created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({}).populate("department");
    res.send(employees);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getIdEmployee = async (req, res, next) => {
  const employee = await Employee.findById(req.params.id).populate(
    "department"
  );

  try {
    if (!employee) {
      throw new Error("Employee not found");
      next();
    }
    res.send(employee);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    let employee = await Employee.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    ).populate("department");
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getByGender = async (req, res) => {
  try {
    const employees = await Employee.find({
      gender: req.query.gender,
    }).populate("department");
    res.status(200).send(employees);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getByName = async (req, res) => {
  const { name } = req.query;
  let employee_name;
  let employee_lastname;
  let employee_all;

  try {
    const employees = await Employee.find({}).populate("department");
    if (name) {
      employee_name = employees.filter((employee) =>
        employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );
      employee_lastname = employees.filter((employee) =>
        employee.lastname.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );
      employee_all = [...employee_name, ...employee_lastname];
      res.status(200).send(employee_all);
    } else {
      res.send(employees);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getByDepartment = async (req, res) => {
  try {
    const employees = await Employee.find({
      department: req.params.id,
    }).populate("department");
    res.status(200).send(employees);
  } catch (error) {
    res.status(400).send(error);
  }
};
