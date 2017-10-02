"use strict";
var gamesModel = require("../models/player");
Object.defineProperty(exports, "__esModule", { value: true });
var GamesController = {
    getAllRecords: function(req, res) {
        var response = {};
        gamesModel.find({}, function(err, data) {
            // Mongo command to fetch all data from collection.
            if (err) {
                response = { "status": "error", "message": err.message };
            } else {
                response = { "status": "success", "data": data };
            }
            res.json(response);
        });
    },

    generateMatchData: function(req, res) {
        var requestBody = req.body;
        var response = {};
        gamesModel.create(requestBody, function(err, result) {
            if (err) {
                response = { "status": "error", message: err.message }
                res.send(response)
            } else {
                response = { "status": 'success', data: result }
                res.send(response)
            }
        });
    },

    getPlayerStats: function(req, res) {
        var player_id = req.body.player_id;
        gamesModel.aggregate([{
                $match: {
                    player_id: player_id
                }
            },
            {
                $group: {
                    _id: "$player_id",
                    totalGamesPlayed: {
                        $sum: 1
                    },
                    totalPointsScored: {
                        $sum: "$point_scored"
                    },
                    averageScore: {
                        $avg: "$point_scored",
                    },
                    totalMatcheWon: {
                        $addToSet: "$match_result"
                    },
                    largestGameRoomSize: {
                        $max: "$room_size"
                    },
                    matchStreak: {
                        $sum: "$is_streak"
                    }
                }
            },
            {
                $project: {
                    player_id: "$_id",
                    totalGamesPlayed: "$totalGamesPlayed",
                    totalPointsScored: "$totalPointsScored",
                    averageScore: "$averageScore",
                    totalMatcheWon: {
                        $size: {
                            $filter: {
                                input: "$totalMatcheWon",
                                as: "matchResult",
                                cond: {
                                    $eq: ["$$matchResult", "win"]
                                }
                            }
                        }
                    },
                    largestGameRoomSize: "$largestGameRoomSize",
                    matchStreak: "$matchStreak"

                }
            }
        ], function(err, result) {
            var response = {};
            if (err) {
                response = { "status": "error", message: err.message }
                res.send(response)
            } else {
                response = { "status": 'success', data: result }
                res.send(response)
            }
        });
    }
}
exports.GamesController = GamesController;