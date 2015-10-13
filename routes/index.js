var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user !== undefined) {
    res.render('index', { title: 'Express', tweets: db });
  } else {
    res.render('login', {title: "Login to Fritter"});
  }
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  db.push({user: 'Lia', body: req.body.tweet, id: db.length + 1});
  res.redirect('/');
});

router.delete('/tweets/:id', function(req, res, next) {
  // find tweet with id req.params.id in db array and delete
  res.send({success: true});
});

module.exports = router;
