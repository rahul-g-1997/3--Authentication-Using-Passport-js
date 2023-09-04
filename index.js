const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./routes"));

// setup of view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (error) => {
  if (error) {
    console.log(`error in running server :: ${error}`);
  }
  console.log(`server listening on port :: ${port}`);
});
