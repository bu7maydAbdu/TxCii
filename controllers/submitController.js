const Letter = require("../models/Letter.js")


module.exports = {
   submitLetterPage : (request, response)=> {
    response.render("submit.ejs")
   } , 
   addLetter :async (request, response)=>{
    try{
        await Letter.create({letter : request.body.letter, binaryEq : request.body.binaryEquivalent})
        console.log('letter has been added!')

        response.redirect("/submit")
    }catch(err){
        console.log(err)
        console.log("not added")

    }
}
}