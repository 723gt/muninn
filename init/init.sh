#!/bin/sh

cd ../db/agroup
if [ -e ./agroup.sqlite3 ]; then
  rm ./agroup.sqlite3 
fi
  sqlite3 agroup.sqlite3 "create table agroup (player_name text, music text,scoer integer)"
  chmod 777 agroup.sqlite3
for i in `seq 0 9`
do
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','Himmel''s wander',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','attacking ready!',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','Who dirty hands for...',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','AxisDrive',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','Gradius',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','Glassland',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','In search of hope',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','SP',0)";
  sqlite3 agroup.sqlite3 "insert into agroup(player_name,music,scoer) VALUES('John Doe','NightFlight',0)";
done



