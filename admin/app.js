var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var socialLoginClass    = require("social-login");
var admin = require("firebase-admin");
var serviceAccount = require("./learn-ce91a4e1f074.json");
// var provider = new firebase.auth.FacebookAuthProvider(); 

var index = require('./routes/index');
var singin = require('./routes/singin');
var calendar = require('./routes/calendar');
var profile = require('./routes/profile');
var special = require('./routes/special');
var offers = require('./routes/offers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://learn-bfd53.firebaseio.com"
});
// firebase.auth().useDeviceLanguage();
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user);
//   } else {
//     console.log("đéo có ai đăng nhập");
//   }
// });
// var socialLogin     = new socialLoginClass({
//     app:  app,
//     url:  'http://localhost:3000',
//     onAuth: function(req, type, uniqueProperty, accessToken, refreshToken, profile, done) {
//           findOrCreate({
//               profile:  profile,       
//               property: uniqueProperty,
//               type:   type           
//           }, function(user) {
//               done(null, user);   
//               console.log(user)
//           });
//       }
//   });
//   socialLogin.use({
//     facebook: {
//         settings: {
//             clientID:   "148127002482488",
//             clientSecret:   "f85117c134e80d3ecd07b4baa3bb41a4",
//             authParameters: {
//                 scope: 'read_stream,manage_pages'
//             }
//         },
//         url:  {
//             auth:   "/",
//             callback:   "/",
//             success:  '/index',
//             fail:   '/'     
//         }
//     },
//   });
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', singin);
app.use('/admin', index);
app.use('/calendar', calendar);
app.use('/profile', profile);
app.use('/special', special);
app.use('/offers', offers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
