var express = require("express");
var app = express();

var verifyToken = function(req,res,next) {
  var token = req.query.accesstoken || req.headers['accesstoken'];
    if (token) {
    // verifies secret and checks exp
            if (token !== process.env.ACCESS_TOKEN) { //failed verification.
                return res.json({  
                    "success": "error",  
                    "message": 'Failed to authenticate token.'
                });  
            }
            next(); //no error, proceed
    } else {
        // forbidden without token
        return res.status(403).send({  
            "success": "error",  
            "message": "No token provided."  
        }); 
    }
}
module.exports = verifyToken;