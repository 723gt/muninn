var app = require("../app");
var request = require("supertest");

describe('コントローラ 正常系 テスト',function(){
  describe('GET /',function(){
    it("ステータスコード200が返ってくる",function(done){
      request(app) 
      .get('/')
      .expect(200,done);
    })
  })
})
