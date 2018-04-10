const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, './build')));

app.get('*', function(req, res) {
  res.send('Everything is working');
});

app.listen(PORT, function(){
  console.log('app running on port '+PORT);
})
