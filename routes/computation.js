var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
let someNumber=Math.floor(Math.random()*100)
res.render('rs', { result:'log applied to '+someNumber+' is '+Math.pow(someNumber)});
});
module.exports = router;