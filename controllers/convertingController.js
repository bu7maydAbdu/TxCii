const express = require("express")
const mongoose = require("mongoose")
const Letter = require("../models/Letter")

const app = express()

module.exports = {
    getConverterPage : (request, response)=>{
       response.render("converterPage.ejs")
    },
    convertToBinary : async (request, response)=> {
    
        try {
            console.log(request.body)

            const textAreaBody = request.body.textToConvert 
            const purifiedText = textAreaBody.replace( /[\r\n]+/gm, "" ).trim();// purifying the text area  body
            const txtArr = purifiedText.split("")
            console.log(txtArr)
            // splitting the textarea string and turn it into array
            // console.log(tXtArr)

              let binaryArray =[] // initializing an empty array to fill it with binary data 
                
                    for(let i = 0; i < txtArr.length ; i++){
    
                        console.log(txtArr[i])
                        const letterItem = await Letter.find({letter : txtArr[i]})
                        const binaryEquivalent = letterItem[0].binaryEq
                    const purifiedBinary = binaryEquivalent.replace( /[\r\n]+/gm, "" ).trim();
                    console.log(purifiedBinary)
                    binaryArray.push(purifiedBinary)
        
                     }
                     console.log("reached here")
        
                     console.log(binaryArray)
        
                  const showCaseBinary =  binaryArray.join("")
                  console.log(showCaseBinary)
        
                response.render("converterPage.ejs", {data: showCaseBinary})
                
               
                           

        }catch(err){
            console.error(err)
           
        }
     
    }
}