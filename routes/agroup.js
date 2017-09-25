var express = require('express');
var router = express.Router();
var db = require('../lib/agroup/database.js');

/* GET /api */
router.get('/api', function(req, res, next) {
  db.selectGetData(res);
});

/* POST / */
router.post('/api',function(req,res,next){
  let data = req.body;
  let res_flag = false;
  if(data.player_name  && data.music && data.scoer){
    res_flag = db.insertPostData(data);
  }
  if(res_flag){res.status(200).end();}
  else{res.status(400).end();}
})
module.exports = router;
