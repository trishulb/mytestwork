var express = require('express')
  , router = express.Router(),
    connection=require('../database/mysqlConnection')
    basePath="/personInfo";

connection.connect(function(err){
	if(err){
		console.error('error connection database ' +err.stack);
		return;
	}
	console.log('connected as id '+connection.threadId);
});

router.get('basePath/{id}',(req,res)=>{
	console.log(req.queryParam);
	let sql ='select * from patientInfo where patientInfoId ='+req.queryParam;

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('Database Created....');
	});
});

module.exports = router