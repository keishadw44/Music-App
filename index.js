const express = require('express');
const { request } = require('https');
const path = require('path');
const app = express();
const songs = require('./app.js')



app.get('/', function (req, res,next ){
    res.sendFile(path.join(__dirname, '/app.html'));
}); 
    
app.get('/cds', function (req, res,next ){
    res.sendFile(path.join(__dirname, '/album.html'));
}); 



app.get('/albums/:i', function(req,res,){
    const{i} = req.params;
    console.log(songs[i]);
    res.send(songs[i])

})

app.listen(3000, function() {
    console.log("Server is listening");
});

     

