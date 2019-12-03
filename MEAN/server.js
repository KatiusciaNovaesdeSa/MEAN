const express = require('express'),
      bodyParser = require('body-parser')

const app = express();

app.use(express.static(__dirname + '/dist/testApp'));
//app.use(bodyParser.json());
const port = process.env.PORT || 4200;
app.listen(port, function(){
    console.log('Listening on port ' + port);
});
    

      
