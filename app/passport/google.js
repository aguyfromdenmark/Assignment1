var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/usermodel');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: "683974318345-7uge9327feqpcim39narlq01a6mqr9bu.apps.googleusercontent.com",
        clientSecret: "SUc2hoqfEFTNAp6JqOc1cwyV",
        callbackURL: "http://127.0.0.1:4000/application/login/googleAuth",
        passReqToCallback : true
    },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate({ username: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    ));
};