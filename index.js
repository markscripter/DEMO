var express = require('express');
var app = express();
var router = require('./bin/routes.js');

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', './bin/pages');

router(app);

app.listen(3000);
