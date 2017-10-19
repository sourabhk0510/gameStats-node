var express = require("express");
var apicache = require("apicache");
var app = express();
var bodyParser = require("body-parser");
var GamesRoutes_1 = require("./api/routes/routes");
let verifyToken = require('./authorizationtoken');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use('/', verifyToken, new GamesRoutes_1.GamesRoutes().routes);
	
app.listen(process.env.PORT || 3000);
console.log("Listening to PORT 3000");
