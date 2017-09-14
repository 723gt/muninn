var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("./db/agroup/agroup.sqlite3");

exports.init = function(){
  db.serialize(function () {
      var create = new Promise(function (resolve, reject) {
        db.get('select count(*) from sqlite_master where type="table" and name=$name',{ $name: 'agroup' }, function (err, res) {
          var exists = false;
          if (0 < res['count(*)']) { exists = true; }
  
          resolve(exists);
        });
      });
  
      create.then(function (exists) {
        if (!exists) {
          db.run('create table agroup (player_name text, music text,scoer integer)');
        }
      });
    });
}