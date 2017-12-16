var express = require('express')
  , router = express.Router(),
    connection=require('../database/mysqlConnection');

connection.connect(function(err){
	if(err){
		console.error('error connection database ' +err.stack);
		return;
	}
	console.log('connected as id '+connection.threadId);
});

router.get('/createDB',(req,res)=>{
	let sql ='CREATE DATABASE mediTest';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result+ " err "+err);
		res.send('Database Created....');
	});
});

router.get('/createTable/patientInfo',(req,res)=>{
	let sql='CREATE TABLE patientInfo(patientInfoId int AUTO_INCREMENT,phoneNumber int(10),age int(3),PRIMARY KEY (patientInfoId) )';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('patientInfo Table is Created....');
	});
});

router.get('/createTable/patientMediceTime',(req,res)=>{
	let sql='CREATE TABLE patientMediceTime(patientMediceTimeId int AUTO_INCREMENT,patientInfoId int,beforeLunch int,afterLunch int,beforeDinner int,AfterDinner int,PRIMARY KEY (patientMediceTimeId),FOREIGN KEY (patientInfoId) REFERENCES patientInfo(patientInfoId))';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('patientInfo Table is Created....');
	});
});

router.get('/createTable/medicalInfo',(req,res)=>{
	let sql='CREATE TABLE MedicalInfo(medicineInfoId int AUTO_INCREMENT,patientInfoId int,name VARCHAR(255),description VARCHAR(255),lable VARCHAR(255),patientInfo int,PRIMARY KEY (medicineInfoId),FOREIGN KEY (patientInfoId) REFERENCES patientInfo(patientInfoId))';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('MedicalInfo Table is Created....');
	});
});

router.get('/createTable/defaultTimeInfo',(req,res)=>{
	let sql='CREATE TABLE defaultTimeInfo(DefaultInfoId int AUTO_INCREMENT,medicineInfoId int,beforeLunch int,afterLunch int,beforeDinner int,AfterDinner int,PRIMARY KEY (DefaultInfoId),FOREIGN KEY (medicineInfoId) REFERENCES MedicalInfo(medicineInfoId))';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('defaultTimeInfo Table is Created....');
	});
});



router.get('/createTable/pharmacyInfo',(req,res)=>{
	let sql='CREATE TABLE pharmacyInfo(pharmacyInfoId int AUTO_INCREMENT,patientInfoId int,name VARCHAR(255),registrationNumber int,description VARCHAR(255),PRIMARY KEY (pharmacyInfoId),FOREIGN KEY (patientInfoId) REFERENCES patientInfo(patientInfoId) )';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('pharmacyInfo Table is Created....');
	});
});

router.get('/createTable/prescribtionInfo',(req,res)=>{
	let sql='CREATE TABLE prescribtionInfo(patientInfoId int,medicineInfoId int,prescribtionId int(20) )';

	connection.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('prescribtionInfo Table is Created....');
	});
});

module.exports = router
