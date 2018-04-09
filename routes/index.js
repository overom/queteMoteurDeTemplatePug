var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/forms-:number(\\d+)", function(req, res, next) {
  console.log(req.params.number);
  console.log(req.query.level);
});

router.post("/forms-:number(\\d+)", function(req, res, next) {
  console.log(req.params.number);
  console.log(req.body.name);
});

router.get("/coucou-pug", (req, res, next) => {
  res.render("coucou", { sayHello: "Hello Buddy" });
});

module.exports = router;
