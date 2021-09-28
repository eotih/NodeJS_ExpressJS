const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');


// Connect to db
db.connect();

const app = express();
const port = 3000;

// Cấp quyền cho phép sử dụng PUT DELETE
app.use(methodOverride('_method'))

// Cấp quyền cho phép người dùng có thể xem được những thứ trong folder public
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json()) // gửi từ code javascript

//HTTP logger
// app.use(morgan('combined'))

//Template engine ( đặt tên cho file)
app.engine('hbs', handlebars({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b,
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})