const Router = require("express");
const departmentController = require("../controllers/departmentController");

const router = Router();

router.post("/newdep", departmentController.newDepartment);
router.get("/", departmentController.getDepartments);
router.get("/:id", departmentController.getIdDepartment);
router.put("/:id", departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);

module.exports = router;
