const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false })); //xử lý dữ liệu gửi lên từ form HTML
app.use(express.json()); //xử lý dữ liệu được gửi lên từ trình duyệt dưới dạng JSON.

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

//route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
