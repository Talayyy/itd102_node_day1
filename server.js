require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(PORT, function()
{console.log('server is running on port' + PORT);
});

app.get('/About', function(req, res){
    res.send('About');
});

