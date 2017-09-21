var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("./db/agroup/agroup.sqlite3");

exports.insertPostData = insertPostData;
exports.selectGetData = selectGetData;

function insertPostData(data){
  try{
    let insret_sql = 'insert into agroup(player_name,music,scoer) values ($p,$m,$s)';
    db.serialize(function(){
      let log =  db.run(insret_sql,{
                   $p: data.player_name,
                   $m: data.music,
                   $s: data.scoer
                 });
    });
    return true;
  }
  catch(e){
    return false;
  }
}

function selectGetData(){
  let select_sql = 'select * from agroup where music = ? order by scoer DESC';
  var res_array = [];
  var music_array = ["fuga","hoge"];
  
  for(var i = 0; i < music_array.length; i++)
  {
    db.serialize(function(){
      console.log(i);
      db.all(select_sql,
        music_array[i],
        function(err,row){
          res_array[i] = row;
          //console.log(res_array);
        }
      )
    })
  }
  console.log("return");
  console.log(res_array);
  return res_array;
}
