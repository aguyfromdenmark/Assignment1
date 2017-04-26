const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/assignment1");
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());

const localSignupStrategy = require('./app/passport/signup');
const localLoginStrategy = require('./app/passport/login');
const googleStrategy = require('./app/passport/google');
passport.use('signup', localSignupStrategy);
passport.use('login', localLoginStrategy);
passport.use('google',googleStrategy);

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