const express= require("express")
const app=express()
const port=4000

app.get("/",(req,res)=>{
    res.status(400).json({
        message:"Hello World bye  !"
    })
})

app.listen(port,()=>{
    console.log("server is running at " + port);
    })
