const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
//Init base
app.use(express.static(path.join(__dirname, "public")));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//morgan
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home"); //đưa home vào body của main
});
app.get("/news", (req, res) => {
  res.render("news"); //đưa news vào body của main
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
