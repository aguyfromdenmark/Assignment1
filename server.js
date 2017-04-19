const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/assignment1");
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());
app.use(flash());

const localSignupStrategy = require('./app/passport/signup');
const localLoginStrategy = require('./app/passport/login');
passport.use('signup', localSignupStrategy);
passport.use('login', localLoginStrategy);

const authCheckMiddleware = require('./app/middleware/auth-check');

var apiRoute = require('./app/routes/api');
app.use('/api',authCheckMiddleware);
app.use('/api', apiRoute);

var authRoute = require('./app/routes/auth');
app.use('/auth',authRoute);  

/*app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});*/

app.listen(process.env.port || 4000, function () {
    console.log('The server is now listening for requests');
});