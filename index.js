'use strict';
const express = require('express');         // Express server
const bodyParser = require('body-parser');  // For parsing incoming requests
const PORT = process.env.PORT || 3000;      // Port 3000 by default

// Initialize express and use body parser middleware
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method to handle a GET Request on /
app.get('/', (req, res) => {
  res.send('Nothing to see here.');
});

// Method to handle a POST Request on /
app.post('/', (req, res) => {
  let body = req.body;
  console.log(body);
  res.json({"Status": "Received"});
});

// Begin application
app.listen(PORT, () => {
  console.log("Application running on port: " + PORT);
});
