var express=require("express"),
    mysql =require("mysql");
  

var connection=mysql.createConnection({
	host :'localhost',
	user :'root',
	password:'admin',
	database:'mediTest'
});

module.exports=connection