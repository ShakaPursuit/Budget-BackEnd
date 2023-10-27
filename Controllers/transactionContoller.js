const express=require('express')
const transactionData=express.Router()
const transactionArray= require("../Models/transaction.model")

//Welcome Page / Login from will be implemented 
transactionData.get("/",(req,res)=>{

res.json('Welcome to BudgetAPP')

});

//Get All Transactions
transactionData.get("/transactions",(req,res)=>{

    res.json(transactionArray)
})
// date: "09/23/2023 ",
// item_name: "Food & Beverage ",
// amount: -23.99 ,
// from: "Debit - from KFC "


//Get Specific Transaction and a specific index
transactionData.get("/transactions/:index",(req,res)=>{
    const index= parseInt(req.params.index);
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
transactionData.delete("transactions/:index",(req,res)=>{
    const index= parseInt(req.params.index);
        if(index===0 || index>= transactionArray.length){

            res.redirect("Sorry, no data found at the index that you are searching for")
        }else{


            res.json(transactionArray.splice([index],1))
        }

            
});

//update a post

transactionData.put("transactions/:index",(req,res)=>{
    const updatedData=req.body

    const index=parstInt(req.params.index);
    if(index === 0|| index>= transactionArray.length){
        res.redirect('Sorry, no data found at the index that you are searching for')

}else{
        transactionArray[index]=updatedData

        res.send('Your Data Was Updated Successfully')

}




});

module.exports= transactionData