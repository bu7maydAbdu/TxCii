const express = require("express")
const PORT = 8000
const mainPageController = require("./controllers/mainController.js")



const app = express()




app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use("/", mainPageController)




app.listen(pr.env.PORT || PORT, ()=> {

})