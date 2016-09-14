var express = require('express');
var path = require('path');
var mainRoute = require('./routes/main/routes');

var app = express();
var exphbs = require('express-handlebars');

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/assets', express. static('assets'));

app.set('views', path.join(__dirname, '/views'));

app.engine('handlebars', exphbs({
  defaultLayout: 'plp',
  layoutsDir: 'views',
  partialsDir: [
    'views/partials/plp',
    'views/partials/pdp'
  ]
}));

app.set('view engine', 'handlebars');

// SPECIFY ROUTES MODULE
app.use('/', mainRoute);
