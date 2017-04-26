var passport = require('passport');
const jwt = require('jsonwebtoken');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/usermodel');
const config = require('./../config');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

module.exports = new GoogleStrategy({
    clientID: "683974318345-7uge9327feqpcim39narlq01a6mqr9bu.apps.googleusercontent.com",
    clientSecret: "SUc2hoqfEFTNAp6JqOc1cwyV",
    callbackURL: "http://127.0.0.1:4000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        User.findOrCreate({ username: profile.displayName }, function (err, user) {

            const payload = {
                sub: user._id
            };

            // create a token string
            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                username: user.username
            };

            return done(null,token,data);
        });
    }
);