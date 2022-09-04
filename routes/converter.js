const express = require("express")
const router = express.Router()
const convertingController = require("../controllers/convertingController.js")

router.get("/", convertingController.getConverterPage)




module.exports = router