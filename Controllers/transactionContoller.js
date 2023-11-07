const express=require('express')
const transactionData=express.Router()
const bodyParser= require('body-parser')
const transactionArray= require("../Models/transaction.model")
const jsonParser= bodyParser.json()
const urlencodedParser=bodyParser.urlencoded({extended:false})
//Welcome Page / Login from will be implemented 
transactionData.get("/",(req,res)=>{

res.json('Welcome to BudgetAPP')

});

//Get All Transactions
transactionData.get("/transactions",(req,res)=>{

    res.json(transactionArray)
})


//Get Specific Transaction and a specific index
transactionData.get("/transactions/:index",(req,res)=>{
    const index= parseInt(req.params.index);
    // const {index}=parsInt(req.params)
    if(index<0|| index>= transactionArray.length){
        res.redirect('Sorry, no data found at the index you are searching for')
     }else{
         res.send(transactionArray[index])
     }
})


//To Create and Transaction 

transactionData.post("/transactions",(req,res)=>{
    const{date,item_name,amount,from}=req.body
        transactionArray.push({date,item_name,amount,from})
        res.json('Ok Data Posted Successfully')


})

//To delete a post at a specific
transactionData.delete("/transactions/:index",(req,res)=>{
    const index= parseInt(req.params.index);
        if(index===0 || index>= transactionArray.length){

            res.redirect("Sorry, no data found at the index that you are searching for")
        }else{


            res.json(transactionArray.splice([index],1))
        }

            
});

//update a post

transactionData.put("/transactions/:index",urlencodedParser,(req,res)=>{
    const updatedData=req.body

    const index=parseInt(req.params.index);
    if(index < 0|| index>= transactionArray.length){
        res.redirect('Sorry, no data found at the index that you are searching for')

}else{
        transactionArray[index]=updatedData

        res.send('Your Data Was Updated Successfully')

}




});

module.exports= transactionData