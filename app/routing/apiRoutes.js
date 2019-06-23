const friends = require('../data/friends.js');
console.log(friends);
module.exports = function(app, path){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        console.log(req.body);
        res.json(req.body);
    });

    // app.get('/find', function(req, res){
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // })
    // //other routes..
}