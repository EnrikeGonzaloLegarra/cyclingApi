var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('UCI Men WorldTour Teams');
});

module.exports = router;
