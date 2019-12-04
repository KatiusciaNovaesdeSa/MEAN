const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('backend/config/DB');
      playerRoutes = require('backend/routes/playerRoutes');
      gameRoutes=require('backend/routes/gamesRoutes')
      
      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

const appBackend = express();
appBackend.use(bodyParser.json());
appBackend.use(cors());
const portBackend = 4000;
appBackend.use('/players', playerRoutes);
appBackend.use('/games', gameRoutes);
appBackend.listen(portBackend, function(){
    console.log('Listening on port ' + portBackend);
});
       

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
    

      
