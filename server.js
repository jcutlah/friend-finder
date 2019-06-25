const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080;

let friends = require('./app/data/friends');

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app, path);



app.listen(PORT, function(){
    console.log('app listening on http://localhost:' + PORT);
})
