const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes');
const db = require('./config/db');
//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false })); //xử lý dữ liệu gửi lên từ form HTML
app.use(express.json()); //xử lý dữ liệu được gửi lên từ trình duyệt dưới dạng JSON.

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
//path.join(__dirname, arguments) nó nhận nhiều đối số cứ mỗi dấu , đại diện cho một cấp, ví dụ dùng win thì ,<=>/
//__dirname <=> D:\VisualCode\NodeExpress_Blog\src
app.set('views', path.join(__dirname, 'resources', 'views'));
//morgan
app.use(morgan('combined'));

//route(routes:rule route,controller: class contain callback)
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
