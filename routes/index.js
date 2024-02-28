var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "You smell.",
    user: "Dwayne",
    date: new Date(),
  },
  {
    text: "Acknowledge me.",
    user: "Roman",
    date: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

module.exports = router;
