const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController.js")
const submitController = require("../controllers/submitController.js")



//@desc get the submit page
//@route GET /submit/
router.get("/",submitController.submitLetterPage)


//@desc add letter and it's binary value
//@route /submit/addLetter

router.post("/addLetter", submitController.addLetter)




module.exports = router