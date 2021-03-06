const express = require('express');
const app = express();
const local = 5000;
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var sass = require('node-sass');

app.use(sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'compressed'
}));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.set('port', (process.env.PORT || local));
app.set('view engine', 'ejs');
require('./app/routes')(app, {});

app.listen(app.get('port'), () => {
  console.log('app up');
});
