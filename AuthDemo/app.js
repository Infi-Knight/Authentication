var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

var app = express();
mongoose.connect("mongodb://localhost/auth_demo1");

app.use(require("express-session")({
  secret: "Expecto Patronum Expelliarmus Avada Kedavra ",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Home route
app.get("/", function(req, res){
  res.render("home");
});

// Secret Route
app.get("/secret", function(req, res){
  res.render("secret");
});

// ERROR 404
app.get("*", function(req, res){
  res.send("ERROR 404. Page not found");
});

// App listeners
app.listen(3000, process.env.IP, function(){
  console.log("There you go...");
});
    