// -----------------------------------------------------------------------------
// load and initialize npm modules
// -----------------------------------------------------------------------------
var express = require('express');
var app = express();
// set up handlebars view engine: the default layout will be the file main.handlebars
// that will be the layout used by any page unless we specify another one
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple."
];

// -----------------------------------------------------------------------------
// set up the application
// -----------------------------------------------------------------------------

app.set('port', process.env.PORT || 3000);
// create the view engine with name 'handlebars'
app.engine('handlebars', handlebars.engine);
// configure Express to use the created view engine
app.set('view engine', 'handlebars');
// add the static middleware:
// The static middleware allows you to designate one or more directories as
// containing static resources that are simply to be delivered to the client
// without any special handling. This is where you would put things like
// images, CSS files, and client-side JavaScript files.
// The static middleware has the same effect as creating a route for each static
// file you want to deliver that renders a file and returns it to the client.
app.use(express.static(__dirname + '/public'));


// -----------------------------------------------------------------------------
// define general routes
// -----------------------------------------------------------------------------
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
});


// -----------------------------------------------------------------------------
// define error routes
// -----------------------------------------------------------------------------
// (note) app.use is the method by which Express adds middleware
// custom 404 page
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});


// -----------------------------------------------------------------------------
// init the application
// -----------------------------------------------------------------------------
app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press ctrl+c to terminate.');
});