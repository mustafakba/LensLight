const getIndexPage = (req,res) =>{
    res.render("index")
}

const getAboutPage = (req,res) =>{
    res.render("about.ejs")
}
export {getIndexPage,getAboutPage}