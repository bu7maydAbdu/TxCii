const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController.js")
const convertingController = require("../controllers/convertingController.js")




router.get("/",mainController.getHomePage)





module.exports = router