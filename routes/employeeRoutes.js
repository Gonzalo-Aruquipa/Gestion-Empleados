const Router = require("express");

const router = Router();

router.get("/", (req, res) =>{
  console.log("conectado")
})

module.exports = router;
