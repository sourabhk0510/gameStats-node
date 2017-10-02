# gameStats-node
This Project retries the game statistical data for players.
## Base URl 
- AWS: http://ec2-18-221-114-211.us-east-2.compute.amazonaws.com:3000/#{action}
- Heroku: https://gamestatistics.herokuapp.com

<br/> action : /getPlayerStats
<br/> request : POST 
<br/> body :  { 'player_id' : "#{range}"}  => range [101..110]

<br/> action : /generateMatchData
<br/> request : POST
<br/> body : eg. {"point_scored":50,"match_result":"win","is_streak":1,"player_id":"101","room_size":7}
