var app = require("../app");
var request = require("supertest");
var should = require("should");
var sqlite3 = require("sqlite3");
var dbinit = require("../lib/agroup/dbinit.js");
var db = new sqlite3.Database("./db/agroup/agroup.sqlite3");
var test_json = { "player_name": "dummy player",
                  "music": "dummy music",
                  "scoer": 100
                };

var dummy_json = {"player_name": "before dummy",
                  "music": "before music dummy",
                  "scoer": 200
                 };

describe('A班 コントローラ 正常系 テスト',function(){
  before(function(done){
    beforeFunction(done);
  })
  describe('POST /agroup/api',function(){
    it("ステータスコード200が返ってくる",function(done){
      request(app)
      .post('/agroup/api')
      .send(test_json)
      .expect(200,done);
    })
  })

  describe('GET /agroup/api',function(){
    it("JSONが返ってくる",function(done){
      request(app) 
      .get('/agroup/api')
      .expect(200)
      .end((err,finn)=>{
        let data = finn.body;
        postDataChecker(data);
        done();
      })
    });
  })
  after((done) => {
    afterFunction(done);
  })
})

function postDataChecker(data){
  data.should.be.Array;
}

function beforeFunction(done){
  db.serialize(function(){
    db.run('insert into agroup(player_name,music,scoer) values ($p,$m,$s)',{
      $p: dummy_json.player_name,
      $m: dummy_json.music,
      $s: dummy_json.scoer
    })
    done();
  })
}

function afterFunction(done){
  db.serialize(function(){
    db.run('delete from agroup where player_name = (?)',dummy_json.player_name,function(err){
      if(err) { console.log(err) }
    })
    db.all('select * from agroup where player_name = (?)',test_json.player_name,function(err,finn){
      if(err) {console.log(err)}
      if(finn == null || finn.length == 0)
      {
        db.run('delete from agroup where player_name = (?)',finn.player_name,function(err){ if(err){ console.log(err)}});
      }
    })
    done();
  })
}
