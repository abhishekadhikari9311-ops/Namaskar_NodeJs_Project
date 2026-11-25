const express= require("express")
const app=express()
const port=4000

const path=require("path")

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public/")))

app.get("/register",(req,res)=>{
    res.render("auth/register")
})


app.get("/login",(req,res)=>{
    res.render("auth/login")
})

app.get("/navbar",(req,res)=>{
    res.render("components/navbar")
})

app.listen(port,()=>{
    console.log("server is running at " + port);
})