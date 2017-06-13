var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var shelljs = require('shelljs');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/receiver', function (req, res, next) {
    console.log(req.body);
    res.send('success');
});

router.post('/receiver', multipartMiddleware, function (req, res, next) {

    console.log(req.files.file);
    var file = req.files.file;
    shelljs.mv(file.path, path.join('./', 'files', file.name));
    res.send('success\n');
});

module.exports = router;
