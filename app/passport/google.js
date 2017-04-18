var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/usermodel');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: "350623855037-dff4lug3k58a2fs670cm16l09eb9rllo.apps.googleusercontent.com",
        clientSecret: "8GhtXj0tXteYHv2KI8Q6Ndp1",
        callbackURL: "http://127.0.0.1:4000/application/login/googleAuth"
    },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    ));
};