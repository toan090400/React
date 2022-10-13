const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const Passport = require("../../models/passportModel");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.LOGIN_CLIENT_ID,
      clientSecret: process.env.LOGIN_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, callback) => {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        image: profile.photos[0].value,
      };
      try {
        let user = await Passport.findOne({ googleId: profile.id });

        if (user) {
          callback(null, profile);
        } else {
          user = await Passport.create(newUser);
          callback(null, profile);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
