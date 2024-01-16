const Router = require("express");
const userController = require("../controllers/userContoller");

const router = Router();

router.post("/register", userController.register);

module.exports = router;
