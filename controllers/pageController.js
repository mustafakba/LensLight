const getIndexPage = (req, res) => {

  console.log(req.user)

  res.render("index", {
    link: "index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about.ejs", {
    link: "about",
  });
};
const getRegisterPage = (req, res) => {
  res.render("register", {
    link: "register",
  });
};

const getLoginPage = (req, res) => {
  res.render("login", {
    link: "login",
  });
};

export { getIndexPage, getAboutPage,getRegisterPage,getLoginPage };
