var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    cors = require('cors');

//BODYPARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
const originsWhitelist = ['http://localhost:4200'];

const corsOptions = {
  origin: function(origin, callback){
    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
}

app.use(cors(corsOptions));

// ROUTES
var categoryRoutes = require('./api/routes/category.routes'); //importing route
var pictureRoutes = require('./api/routes/picture.routes');
categoryRoutes(app); //register the route
pictureRoutes(app);

// PICTURES
app.use(express.static('pictures'));

app.listen(port);

console.log('Momentime server started on: ' + port);
