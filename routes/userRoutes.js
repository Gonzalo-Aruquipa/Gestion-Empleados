const Router = require("express");
const userController = require("../controllers/userContoller");

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
