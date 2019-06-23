const express = require('express');
const path = require('path');
const app = express();
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app, path);
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function(){
    console.log('app listening on http://localhost:' + PORT);
})
