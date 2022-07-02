const express = require('express');
//  HTTP request logger
const morgan = require('morgan');
//  Template engine
const handlebars = require('express-handlebars');
//  Route
const route = require('./routes/index.route');

const port = 3000;
const app = express();

//  Set HTTP request logger
app.use(morgan('combined'));
//  Set template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
//  Set views folder
app.set('views', './src/resources/views');
//  Set static file directory
app.use(express.static('./src/public'));

//  Routing
route(app);

app.listen(port, () => {});