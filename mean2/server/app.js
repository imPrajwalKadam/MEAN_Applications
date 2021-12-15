const { request, response } = require('express');
const express = require('express');
const app = express();

app.listen(3000, Atharva);

function Atharva(request, response)
{
     console.log("Atharva's Server is Started");
}

app.get('/getBatches',MarvellousBatches);

function MarvellousBatches(request,response)
{
     response.json({
          "BatchName":"Python",
          "fees": 12500
     })   
}    
//Paramiters 1st Route Name
app.get('/getAdminDetails',MarvellousAdmin)

function MarvellousAdmin(request,response)
{
     response.json({
          "mobile": "7745832612",
          "mail":"prajwalkadam03@gmail.com"
     })
}

app.get('/Demo',(request,response) => {
     response.json({
          "Data":"Marvellous"
     });
});
     //http://localhost:3000
