const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/db_project');  //connect db
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});





