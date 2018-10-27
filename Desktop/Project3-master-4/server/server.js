const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var cookieParser = require('cookie-parser');

// Port
var PORT = process.env.PORT || 3000;

// Route requires

const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// What I added to help with mongo db
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
  } else {
	mongoose.connect('mongodb://fitnessfinder:fitnessfinder123@ds119853.mlab.com:19853/heroku_lc6r3nsr');
  }
  
  //local db
  // mongoose.connect('mongodb://localhost/local host name');
  
  //mlab uri - mongodb://fitnessfinder:fitnessfinder123@ds119853.mlab.com:19853/heroku_lc6r3nsr

  // Init mongodb
  mongoose.Promise = Promise;
  var db = mongoose.connection;
  
// Show any Mongoose errors
db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/user', user);



// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
