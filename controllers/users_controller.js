const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

module.exports.signup = function (req, res) {
  return res.render("sign_up", {
    title: "Sign Up",
  });
};

module.exports.signin = function (req, res) {
  return res.render("sign_in", {
    title: "Sign In",
  });
};

module.exports.create = async function (req, res) {
  try {
    if (req.body.password !== req.body.cnfpassword) {
      return res.redirect("back");
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      const newUser = new User(req.body);
      await newUser.save();
      return res.redirect("/users/sign-in");
    } else {
      // Handle case when the user already exists
      console.log("user already exists");
      return res.redirect("/users/sign-in");
    }
  } catch (err) {
    console.error("Error:", err);
    // Handle the error appropriately
    return res.status(500).send("Internal Server Error");
  }
};

module.exports.createSession = function (req, res) {
  
};
