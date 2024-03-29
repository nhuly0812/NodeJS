const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3200;

const route = require('./routes');

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
             }),
);
             app.use(express.json()
             );

//HTTP logger
// app.use(morgan("combined"));

//template angine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//route

route(            app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
