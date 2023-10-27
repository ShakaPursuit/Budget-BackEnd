 const transactionController=require("./Controllers/transactionContoller")
 const express=require('express')
 const app=express()
 const cors=require('cors')
 app.use(cors())
 app.use(express.json());

 app.use("/",transactionController)

 app.get("*",(req,res)=>{res.status(404),res.json({error:'DOES NOT EXIST'})})

 module.exports=app