var PORT = 3333;
var dgram = require("dgram");

sock = dgram.createSocket("udp4",function(msg,info){
  console.log("msg:" + msg);
})

sock.bind(PORT,'0.0.0.0');
