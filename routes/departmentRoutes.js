const Router = require("express");
const departmentController = require("../controllers/departmentController");

const router = Router();

router.post("/newdep", departmentController.newDepartment)

module.exports = router;
