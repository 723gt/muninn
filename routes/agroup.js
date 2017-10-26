var express = require('express');
var router = express.Router();
var db = require('../lib/agroup/database.js');

/* GET /api */
router.get('/api', function(req, res, next) {
  db.selectGetData(res,"5","api");
});

/* POST / */
router.post('/api',function(req,res,next){
  let data = req.body;
  let res_flag = false;
  if(data.player_name  && data.music && data.score){
    res_flag = db.insertPostData(data);
  }
  if(res_flag){res.status(200).end();}
  else{console.log(req.body);res.status(400).end();}
})

/* Rank View */
router.get('/:no',function(req,res,next){
  db.selectGetData(res,"10",req.params.no);
})

/* Rank View */
router.get('/select/:no',function(req,res,next){
  db.selectGetData(res,"10","select",req.params.no);
})

router.get('/',function(req,res,next){
  res.render("select");
})
module.exports = router;
