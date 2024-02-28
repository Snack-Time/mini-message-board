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

router.get("/new", function(req, res, next) {
  res.render('form', {title: "New Message"})
});

router.post("/new", function(req, res, next) {
  messages.push({
      text: req.body.text,
      user: req.body.name,
      date: new Date(),
  })
  res.redirect('/')
})


module.exports = router;
