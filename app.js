const express= require("express")
const app=express()
const port=4000

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    const name="abhi ram";const age=26
    res.status(400).render("home",{name,age})
})

app.listen(port,()=>{
    console.log("server is running at " + port);
    })