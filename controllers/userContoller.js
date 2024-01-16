const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const user = new User(req.body);
  try {
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.password, salt);
    await user.save();
    res.status(200).send("User created");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
