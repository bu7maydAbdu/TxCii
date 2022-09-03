const { find } = require("../models/Letter")
const Letter = require("../models/Letter")

module.exports = {
    getConverterPage : (request, response)=>{
       response.render("converterPage.ejs")
    },
    convertToBinary : async (request, response)=> {

        try {
            console.log(request.body)
            const textAreaBody = request.body.textToConvert
             const purifiedText = textAreaBody.replace( /[\r\n]+/gm, "" ).trim();
             console.log(purifiedText)

             const tXtArr = purifiedText.split("")
             console.log(tXtArr)
              let binaryArray =[]

             for(let i = 0; i < tXtArr.length ; i++){
                console.log(tXtArr[i])
                const letterItem = await Letter.find({letter : tXtArr[i]})
                const binaryEquivalent = letterItem[0].binaryEq
                console.log(binaryEquivalent)  
            const purifiedBinary = binaryEquivalent.replace( /[\r\n]+/gm, "" ).trim();
            binaryArray.push(purifiedBinary)
             }

             console.log(binaryArray)
              

        }catch(err){
            console.error(err)
           
        }
     
    }
}