'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var truckRoutes= require('./routes/truckRoutes');
var app = express();
var webPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/trucks', truckRoutes);

app.listen(webPort, function () {
  console.log('web server started on port ' + webPort);
});