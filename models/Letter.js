const mongoose = require ("mongoose")

const LetterSchema = new mongoose.Schema({

    letter : {
        type : String, 
        required : true
    }, 
    binaryEq : {
        type : String, 
        required : true,
    }

})


module.exports = mongoose.model('Letter', LetterSchema)