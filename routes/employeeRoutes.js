const Router = require("express");
const employeeController = require("../controllers/employeeController");

const router = Router();

router.post("/new-employee", employeeController.newEmployee);
router.get("/", employeeController.getEmployees);
router.get("/:id", employeeController.getIdEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);


module.exports = router;
