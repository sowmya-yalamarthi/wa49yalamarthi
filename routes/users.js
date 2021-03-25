var express = require('express');
var router = express.Router();
var s=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  s=s+1;
  res.send('User accesses are: '+s);
});

module.exports = router;
