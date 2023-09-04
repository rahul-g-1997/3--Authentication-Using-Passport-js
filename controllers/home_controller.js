module.exports.home = (req, res) => {
  return res.render("home", {
    title: "Home",
  });
};

module.exports.contact = (req, res) => {
  return res.render("contact", {
    title: "Contact Us",
  });
};

module.exports.about = (req, res) => {
  return res.render("about", {
    title: "About",
  });
};
