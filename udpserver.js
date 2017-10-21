var PORT = 3333;
var dgram = require("dgram");
var db = require("./lib/agroup/database.js");

console.log("UDP Server Start!!");
try{
  sock = dgram.createSocket("udp4",function(msg,info){
    let data = JSON.parse(msg);
    console.log("Send Data is:" + msg);
    db.insertPostData(data);
  })

  sock.bind(PORT,'0.0.0.0');
}
catch(e){
  console.log(e);
}
