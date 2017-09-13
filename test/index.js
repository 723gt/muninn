var app = require("../app");
var request = require("supertest");
var should = require("should");

var test_json = {};
describe('コントローラ 正常系 テスト',function(){
  describe('GET /',function(){
    it("JSONが返ってくる",function(done){
      request(app) 
      .get('/')
      .expect(200)
      .end((err,finn)=>{
        let data = finn.body;
        postDataChecker(data);
        done();
      })
    });
  })
  describe('POST /',function(){
    it("ステータスコード200が返ってくる",function(done){
      request(app)
      .post('/')
      .send(test_json)
      .expect(200,done);
    })
  })
})

function postDataChecker(data){
  data.should.have.lengthOf(9);
  for(i = 0; i < 9;i++)
  {
    data[i].should.have.lengthOf(5);
    data[i].should.have.property("music");
    data[i].should.have.property("player_name");
    data[i].should.have.property("scoer");
  }
}
