var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("./db/agroup/agroup.sqlite3");

exports.insertPostData = insertPostData;
exports.selectGetData = selectGetData;
exports.json2csv = json2csv;
var res_array_global;

function insertPostData(data){
  try{
    let insret_sql = 'insert into agroup(player_name,music,score) values ($p,$m,$s)';
    db.serialize(function(){
      let log =  db.run(insret_sql,{
                   $p: data.player_name,
                   $m: data.music,
                   $s: data.score
                 });
    });
    return true;
  }
  catch(e){
    return false;
  }
}

function selectGetData(res,limit_num,getType,info){
  let select_sql = `select * from agroup where music = ? order by score DESC limit ${limit_num}`;
  var res_array = [];
  var music_array = require("./music.json")
  var cnt = 0;
  
  for(var i = 0; i < music_array.length; i++)
  {
    db.serialize(function(){
      db.all(select_sql,
        music_array[i],
        function(err,row){
          if(err){console.log(err)}
          cnt++;
          if(getType === "udp"){
            res_array.push(row.map(function(d){ return d}));
          }
          else{
            res_array.push(row);
          }
          if(res_array.length == music_array.length){
            if(getType === "api"){ res.send(res_array);}
            else if(getType === "udp"){json2csv(res_array,res,info) }
            else if(getType === "select"){res.render('agroup_select',{data: {array: res_array,num: info,rs: res}})}
            else{res.render('agroup',{data: {array: res_array,num: getType,rs: res}})}
          }
        }
      )
    })
  }
}

function json2csv(json,sock,info){
  var body = json.map(function(d){
    return Object.keys(d).map(function(key) {
      return `${Number(key) + 1},${d[key]["player_name"]},${d[key]["score"]}\n`;
    }).join("");
  }).join("");
  let message = new Buffer(body);
  sock.send(message,0,message.length,info.port,info.address);
  console.log(info.port);
  console.log(info.address);
  console.log(body);
}

