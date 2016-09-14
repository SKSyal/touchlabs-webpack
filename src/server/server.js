var express = require('express');
var path = require('path');
var mainRoute = require('./routes/main/routes');

var app = express();
var exphbs = require('express-handlebars');

//
// var viewsPath = path.join(__dirname, '/src/server/views');
//
// //app.use('/assets', express.static('assets'));
//
// console.log(viewsPath);
//
// app.engine('handlebars', exphbs({
//   defaultLayout: 'plp',
//   layoutsDir: viewsPath,
//   partialsDir: [
//     viewsPath + '/partials/plp',
//     viewsPath + '/partials/pdp',
//   ]
// }));
// app.set('view engine', 'handlebars');
// app.set("view options", { layout: false })
// app.set('views', viewsPath);
//
// // SPECIFY ROUTES MODULE
// app.use('/', mainRoute);
//
// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!',path.resolve() , __dirname);
// });

//TODO fix the paths
app.engine('hbs', exphbs({
  extname:'hbs',
  defaultLayout:'plp.hbs'
}));
app.set('view engine', 'hbs');

app.use('/', mainRoute);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!',path.resolve() , __dirname);
});
