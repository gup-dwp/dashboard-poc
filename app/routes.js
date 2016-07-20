var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/dashboards', function (req, res) {
  res.render('dashboards', {
    "data" : "new_data",
  });
});


module.exports = router;
