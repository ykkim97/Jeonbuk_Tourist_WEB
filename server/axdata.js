'use strict'

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const serviceKey = require('./config/key');
const tourUrl = require('./config/url');

const app = express();

const PORT = 4000;

let corsOptions = {
    origin : "*",
};

app.use(cors(corsOptions));

//API KEY
const API_KEY = process.env.TEST_KEY;

// 관광지목록 불러오기
const getTouristList = () => {
    return axios.get(`http://apis.data.go.kr/6450000/jeonbuktourist/getJeonbukTouristList?serviceKey=${API_KEY}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
}

app.get('/touristList', async(req, res) => {
    const result = await getTouristList();
    return res.json(result)
})

app.listen(PORT, () => {
    console.log("Server started on port 4000 - 4000포트에서 서버 구동중");
});