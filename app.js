

const fs = require('fs')
const path = require('path');
const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/jquery/dist'))

app.get('/api/v1.0/videos', (req, res) => {
  
  const directoryPath = path.join(__dirname, 'public', 'bird-videos');
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.debug('Unable to scan directory: ' + err);
      res.json({ 'error': 'Unable to scan directory' }).status(400);
    }
    res.json({ 'videos': files }).status(200)
  });

});

app.listen(8080)
