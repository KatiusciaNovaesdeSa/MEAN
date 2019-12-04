const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'dist/testApp')));

///app.use(express.static(__dirname + '/dist/testApp'));
//app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/testApp/index.html'));
});



const port = process.env.PORT || 4200;
app.listen(port, function(){
    console.log('Listening on port ' + port);
});
    

      
