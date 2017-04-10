var express = require('express');
var router = express.Router();
var Xray = require("x-ray");

/* GET users listing. (var i = 18; i < 40; i++) */
router.get('/', function(req, res, next) {
  var xray = new Xray();
  var arrayTeam = [];
  xray(`http://www.procyclingstats.com/teams`, `.wrapper`, {
    name: ['.black'],
    link: ['.black@href'],
    img: ['img@src']
  })(function(err, obj, team) {
    for (var i = 18; i < 40; i++) {
      var team = new Object();
      team["name"] = obj.name[i]
      team["link"] = obj.link[i]
      team["img"] = obj.img[i + 1]
      arrayTeam.push(team);
    }
    console.log(arrayTeam);
    res.render('teams', {
      title: 'Men Continetal',
      arrayTeam: arrayTeam
    });
  })
});

module.exports = router;
