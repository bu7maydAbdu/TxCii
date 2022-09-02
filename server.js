const express = require("express")
const app = express()
const PORT = 8000
const connectDB = require("./config/database")
const main = require("./routes/main.js")
const submitPage = require("./routes/dataSubmit.js")



require('dotenv').config({path: './config/.env'})

connectDB()




app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use("/", main)
app.use("/submit", submitPage)




app.listen(process.env.PORT || PORT, ()=> {
console.log(`the server is running on port ${PORT}`)
})