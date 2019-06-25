const friends = require('../data/friends.js');
console.log(friends);

module.exports = function(app, path){

    function findCompatible(og){
        let compatible = 0
        let friend;
        for (l=0;l<friends.length;l++){
            let score = 0;
            friend = friends[l];
            for (i=0;i<og.scores.length;i++){
                score += Math.abs(parseInt(og.scores[i]) - parseInt(friend.scores[i]));
                console.log(typeof score, score);
            }
            if (score <= compatible){
                compatible = score;
            }
        }
        return console.log("Ideal friend: ", friend);
    }

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        console.log("endpoint hit");
        // console.log(friends);
        console.log(req.body);
        findCompatible(req.body);
        friends.push(req.body);
        res.json(req.body);
    });

    // app.get('/find', function(req, res){
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // })
    // //other routes..
}