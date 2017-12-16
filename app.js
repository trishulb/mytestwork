
const express=require("express");
const bodyParser = require('body-parser');

const app= express();

//app.set('views', __dirname + '/views');
//app.engine('jade', require('jade').__express);
//app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(require('./controllers/CreateTablesController'));
app.use(require('./controllers/controllerModule'));

app.listen('3000',()=>{
	console.log("server strated on port 3000");
});
