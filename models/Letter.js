const mongoose = require ("mongoose")

const LetterSchema = new mongoose.Schema({

    letter : {
        type : String, 
        required : true
    }, 
    binaryEq : {
        type : Number, 
        required : true,
        unique : true
    }

})


module.exports = mongoose.model('Letter', LetterSchema)