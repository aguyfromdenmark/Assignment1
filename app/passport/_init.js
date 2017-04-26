var login = require('./login');
var signup = require('./signup');
var google = require('./google');
var User = require('../models/usermodel');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(User, done) {
        console.log('serializing user: ');console.log(User);
        done(null, User._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, User) {
            console.log('deserializing user:',User);
            done(err, User);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    signup(passport);
    google(passport);

}