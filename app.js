const express = require('express');
const app = express();
const fs = require('fs');

app.set('views', './views');
app.use(express.static('./public'));

app.get('/', function(req, res) {
fs.readFile('login.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);      
        }       
    });
});
app.get('/signin', function(req, res) { 
    fs.readFile('signin.html', (err, data) => {    
        if (err) {         
            console.log(err);    
        } else {         
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });        
            res.end(data);          
        }     
    });
});
app.listen(8888);
