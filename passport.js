const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
require("dotenv").config();

// const GOOGLE_CLIENT_ID =
//   "587018047482-d3vd7mfa48dgnjklt1475b52j87jlevb.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// const GITHUB_CLIENT_ID = "5dd5a66fff66ebbad054";
// const GITHUB_CLIENT_SECRET = "b3747abd331a1943904370090bd603f27c0f1c3b";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // callbackURL: "/auth/google/callback",
      callbackURL: "/auth/google/callback",
    },
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
