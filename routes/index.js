var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST / */
router.post('/',function(req,res,next){
  console.log(req.body);
})
module.exports = router;
