var PORT = 3332;
var dgram = require("dgram");
var db = require("./lib/agroup/database.js");

console.log("UDP Server Start!!");
try{
  sock = dgram.createSocket("udp4",function(msg,info){
    try{
      var json = '{ "player_name" : "Fuga","music": "Himmel\'s wander","score": 100}';
      sock.send(json,0,81,3333,'127.0.0.1');
      var re = /\0/g;
      msg = msg.toString().replace(re, "");
      let data = JSON.parse(msg);
      if(typeof data.score === "string"){data.score = Number(data.score)}
      console.log("Send Data is:" + msg);
      db.insertPostData(data);
      db.selectGetData(sock,"5","udp",info);
    }
    catch(e){
      console.log(e);
      console.log("ERROR Massagse is:" + msg)
    }
  })

  sock.bind(PORT,'0.0.0.0');
}
catch(e){
  console.log(e);
}
