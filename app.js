import express from "express"

const app = express()
const port = 3000

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