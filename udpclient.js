var dgram = require('dgram');
// const HOST = '150.95.131.81';
//const HOST = '150.95.131.81';
const HOST = '192.168.10.250';
const PORT = 3333;

var json = '{ "player_name" : "Fuga","music": "Himmel\'s wander","score": 100}'
var msg = new Buffer(json);

sock = dgram.createSocket('udp4');

sock.send(msg,0,msg.length,PORT,HOST,function(err,bytes){
  if(err){console.log(err)}
  sock.close();
})
