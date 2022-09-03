const express = require("express")
const router = express.Router()
const convertingController = require("../controllers/convertingController.js")

router.get("/", convertingController.getConverterPage)

router.post("/converttobinary", convertingController.convertToBinary)


module.exports = router