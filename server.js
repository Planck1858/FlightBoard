// server code (node js) to run app
// open terminal at this derictory and write "node server.js", then open index.html

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'D:\My\My\Коды, проекты\yandex')));

app.listen(8000);
console.log('Listening on port 8000');