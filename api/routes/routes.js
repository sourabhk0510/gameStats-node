"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var apicache = require("apicache");
var cache = apicache.middleware
var GamesController_1 = require("../controllers/games.controller");

var GamesRoutes = (function() {
    function GamesRoutes() {
        this._router = express.Router();
    }

    Object.defineProperty(GamesRoutes.prototype, "routes", {
        get: function() {
            var router = express.Router();
            router.route("/players").get(GamesController_1.GamesController.getAllRecords);
            router.route("/generateMatchData").post(GamesController_1.GamesController.generateMatchData);
            router.route("/getPlayerStats").get(cache('1 minutes'), GamesController_1.GamesController.getPlayerStats);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return GamesRoutes;
}());

exports.GamesRoutes = GamesRoutes;