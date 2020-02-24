require('newrelic');
const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const path = require('path');
const db = require('../database/index.js');

const app = express();

const port = 3002;

// app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/api/listings/:id', db.getListing);

app.get('/loaderio-07a24b82531744036943364fcc7cb4a5', (req, res) => {
  res.send('loaderio-07a24b82531744036943364fcc7cb4a5');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
