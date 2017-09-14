var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("./db/agroup/agroup.sqlite3");

exports.insertPostData = insertPostData;

function insertPostData(data){
  let insret_sql = 'insert into agroup(player_name,music,scoer) values ($p,$m,$s)';
  db.serialize(function(){
    db.run(insret_sql,{
      $p: data.player_name,
      $m: data.music,
      $s: data.scoer
    });
  });
}
