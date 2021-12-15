     //Starting The Express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('express');
var JsonObj = {};
app.use(cors());
app.use(bodyParser.json());

app.get("/",function(req,res){
     res.json({
          "Angular":"TypeScript",
          "react.JS":"javaScript", 
          "Spring" : "Java"
     });
})
 app.post('/aths',function(req,res){
      console.log(req.body);
      JsonObj = req.body;
      res.status(200).send({"message":"Data received"});
 })
 app.get('/aths',function(req,res){  
    res.json(JsonObj);
})
app.listen(3000, function(){
     console.log("Atharvas Study Server is started");
});
