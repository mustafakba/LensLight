const getIndexPage = (req, res) => {
  res.render("index", {
    link: "index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about.ejs", {
    link: "about",
  });
};
export { getIndexPage, getAboutPage };
