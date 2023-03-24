const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
const cors = require('cors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const SortMiddleWare = require('./app/middlewares/SortMiddleWare');

//decode cookies client gửi lên server req.cookies
app.use(cookieParser());

//custom method trong form khi sunmit, xem music/edit.hbs
app.use(methodOverride('_method'));

//Custom middlewares,nào đặt trước thì chạy trước, các mw sau có thể nhận giá trị từ res. & req. từ this
app.use(SortMiddleWare);

//CORS-cho phép tất cả web truy cập,refer zalo
app.use(cors());

//connect db
db.connect();

//giúp Express đọc các file tĩnh như hình ảnh, file css hay js trong thư mục public
//dùng node-sass biên dịch css vào thư mục public và đọc file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//xử lý(giải mã) dữ liệu gửi lên từ client dạng x-www-form-urlencoded và Json
//ví dụ nếu k có cái này, res.query.params lỗi
app.use(express.urlencoded({ extended: true })); //truyền vào option {extended: true} để cho phép truy cập vào các giá trị nested object và array.
app.use(express.json());

//template engine: customize handlebars => hbs
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        //dùng trong Views
        helpers: require('./helpers/handlebars'),
    }),
);
//set view engine là hbs (handlebars),view engine=>zalo
app.set('view engine', 'hbs');

//path.join(__dirname, arguments) nó nhận nhiều đối số cứ mỗi dấu , đại diện cho một cấp, ví dụ dùng win thì ,<=>/
//__dirname <=> D:\VisualCode\NodeExpress_Blog\src
app.set('views', path.join(__dirname, 'resources', 'views'));

//morgan
app.use(morgan('combined'));

//route(routes:rule route,controller: class contain callback)
route(app);

//
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
