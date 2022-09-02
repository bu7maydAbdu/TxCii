const Letter = require("../models/Letter")
module.exports = {
   submitLetterPage : (request, response)=> {
    response.render("submit.ejs")
   } , 
   addLetter :async (request, response)=>{
    try{
        await Todo.create({letter : request.body.letter, binarryValue : request.body.binaryEquivalent})
        response.redirect('/submit')
    }catch(err){
        console.log(err)
    }
}
}