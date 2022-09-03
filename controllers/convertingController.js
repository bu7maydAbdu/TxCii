const mongoose = require("mongoose")
const Letter = require("../models/Letter")

module.exports = {
    getConverterPage : (request, response)=>{
       response.render("converterPage.ejs")
    },
    convertToBinary : async (request, response)=> {
    
        try {
            
            const textAreaBody = request.body.textToConvert 
            const purifiedText = textAreaBody.replace( /[\r\n]+/gm, "" ).trim();// purifying the text area  body
    
            const tXtArr = purifiedText.split("") // splitting the textarea string and turn it into array
            console.log(tXtArr)

              let binaryArray =[] // initializing an empty array to fill it with binary data 

             for(let i = 0; i < tXtArr.length ; i++){

                console.log(tXtArr[i])
                const letterItem = await Letter.find({letter : tXtArr[i]})
                const binaryEquivalent = letterItem[0].binaryEq
            const purifiedBinary = binaryEquivalent.replace( /[\r\n]+/gm, "" ).trim();
            // console.log(purifiedBinary)
            binaryArray.push(purifiedBinary)

             }

             console.log(binaryArray)

          const showCaseBinary =  binaryArray.join("")
          console.log(showCaseBinary)

        response.render("converterPage.ejs", {data: showCaseBinary})

             

        }catch(err){
            console.error(err)
           
        }
     
    }
}