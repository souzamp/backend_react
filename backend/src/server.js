const express = require('express');
const mongoose = require("mongoose");
const path = require("path");

/* 
https://cloud.mongodb.com/v2/5caf47c8c56c984159b75e21#clusters
docker run -d --name mongo-omnistack -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=omnistack -e MONGO_INITDB_ROOT_PASSWORD=omnistack mongo
*/
const app = express();

// mongoose.connect(
//     'mongodb+srv://oministack:oministack@cluster0-92qbl.mongodb.net/oministack?retryWrites=true', 
//     {
//     useNewUrlParser: true
//      }
// );

mongoose.connect(
    'mongodb://localhost:27017/omnistack?retryWrites=true&authSource=admin', 
    {
      useNewUrlParser: true,
      auth: {
        password: 'omnistack',
        user: 'omnistack'
      }
    },
    err => {
      if (err) console.log(err);
      else console.log('conectado ao mongodb.');
    }
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require("./routes"));

app.listen(3333);