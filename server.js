const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const dotenv = require("dotenv");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { join } = require('./models');
const passport = require('passport');
const { User } = require('./models');
const { Strategy: JWTStrategy, ExtractJwt } = require ('passport-jwt');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  dotenv(null, user.id)
})



sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});