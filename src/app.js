const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/r_index');

const app = express();

// conn db
mongoose.connect('mongodb://localhost/examen')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/dx', express.static(__dirname + '/public/dx'));
app.use('/images', express.static(__dirname + '/public/images'));


// routes
app.use('/index', indexRoutes);
app.use('/', indexRoutes);
app.use('*', indexRoutes);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// starting the server
app.listen(8888, () => {

    console.log('Server on port 3001');

});
