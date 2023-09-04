const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.get("/contact", homeController.contact);
router.get("/about", homeController.about);

router.use("/users", require("./users"));

module.exports = router;
