var express = require('express');
var router = express.Router();
var Xray = require("x-ray");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var xray = new Xray();
  xray(`http://www.procyclingstats.com/teams`, `.wrapper`, {
    title: ['.black'],
    link: ['.black@href'],
    img: ['img@src']
  })(function(err, obj, team) {
    var team = new Object();
    for (var i = 0; i < 18; i++) {
      team["title"] = obj.title[i]
      team["link"] = obj.link[i]
      team["img"] = obj.img[i + 1]
      console.log("-----------------------------------");
      console.log(team.title);
      console.log(team.link);
      console.log(team.img);
      console.log("-----------------------------------");
    }

  })
  res.send('UCI MEN WorldTour Team');
});

module.exports = router;
