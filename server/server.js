const express = require('express');
const app = express();
const cors = require('cors');
const axdata = require('./axdata.js');

app.use(cors());

app.get('/', async(req, res) => {
    await axdata();
})