const { Router } = require("express")
const { create, getAllByPlaca,removeById} = require("../controllers/info.controller")
const router = Router()



router.post("/", create)

router.get("/:placa",getAllByPlaca)

router.delete("/:id",removeById)


module.exports = router