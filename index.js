/**
 * Created by Marten on 9/26/2016.
 */
var express = require('express');
var app = express();

//parse application/json
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});