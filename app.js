import express from "express"
import dotenv from "dotenv"
import conn from "./db.js";

dotenv.config()

//connection to the DB
conn();

const app = express()
const port = process.env.PORT

//ejs template engine
app.set("view engine","ejs")

//static files middleware
app.use(express.static('public'));

//home page
app.get("/",(req,res)=>{
    res.render("index");
})

//about page
app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(port, ()=> {
    console.log(`Application running on this port ${port}`)
})