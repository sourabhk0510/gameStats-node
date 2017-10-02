var mongoose    =   require("mongoose");
mongoose.connect('mongodb://sourabhk:sourabhk123@ds155934.mlab.com:55934/gamestats', {
	useMongoClient: true,
	keepAlive: 300000,
	connectTimeoutMS: 30000
});
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var playerSchema  = {
	"point_scored": { 
		type: Number,
		required: true
	},
	'match_result': { 
		type: String,
		required: true,
		enum: ["win", 'loss']
	},
	"is_streak": { 
		type: Number,
		required: true,
		enum: [0, 1]
	},
	"player_id": { 
		type: String,
		required: true,
		enum: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110"]
	},
	"room_size": {
		type: Number,
		required: true
	},
	"timestamp": { 
		type:  Date,
		default: Date.now
	}
};
// create model if not exists.
module.exports = mongoose.model('games',playerSchema);

