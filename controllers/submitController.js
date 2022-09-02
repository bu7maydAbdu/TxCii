const Letter = require("../models/Letter.js")


module.exports = {
   submitLetterPage : (request, response)=> {
    response.render("submit.ejs")
   } , 
   addLetter :async (request, response)=>{
    try{
        const numberedBinaryEquivalent = Number( request.body.binaryEquivalent)
        await Letter.create({letter : request.body.letter, binaryEq : numberedBinaryEquivalent})
        console.log('letter has been added!')

        response.redirect("/submit")
    }catch(err){
        console.log(err)
        console.log("not added")

    }
}
}