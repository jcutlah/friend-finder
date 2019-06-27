const friends = require('../data/friends.js');

module.exports = function(app, path){

    function findCompatible(og){
        console.log(friends);
        let compatible = 0
        let friend;
        console.log(JSON.stringify(og));
        console.log(og.username)
        for (l=0;l<friends.length;l++){
            console.log(friends[l].username);
            if (og.username != friends[l].username){
                console.log('unique friend found');
                let score = 0;
                friend = friends[l];
                for (i=0;i<og.scores.length;i++){
                    score += Math.abs(parseInt(og.scores[i]) - parseInt(friend.scores[i]));
                }
                if (score <= compatible){
                    compatible = score;
                }
            }
        }
        return {match: friend, user:og}
    }

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.get('/api/friends/:username', function(req, res){
        console.log(`endpoint hit for ${req.params.username}`);
        let og;
        for (i=0;i<friends.length;i++){
            if (req.params.username === friends[i].username){
                og = friends[i];
                break;
            }
        }
        if (og){
            // console.log(`og: ${JSON.stringify(og)}`);
            // console.log("ideal friend: ", findCompatible(og));
            res.json(findCompatible(og))
        } else {
            res.json({error: `Couldn't locate username ${req.params.username}`});
        }
    })

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