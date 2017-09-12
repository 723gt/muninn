var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.send();
});

/* POST / */
router.post('/',function(req,res,next){
  res.send();
})
module.exports = router;
