var express = require("express");
var apicache = require("apicache");
var app = express();
var cache = apicache.middleware
var bodyParser = require("body-parser");
var mongoOp = require("./api/models/player");
var GamesRoutes_1 = require("./api/routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use('/', new GamesRoutes_1.GamesRoutes().routes);
	
app.listen(process.env.PORT || 3000);
console.log("Listening to PORT 3000");