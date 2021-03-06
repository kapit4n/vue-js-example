var express = require('express')
path = require('path');
var app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Example app listening on port 3000!')
})
