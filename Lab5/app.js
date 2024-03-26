const express = require('express');
const config = require('./config').config;

const app = express();

app.get('/', (request, response) => {
    response.send("Server Działa");
});

app.listen(config.port, () => {
    console.info("Server is running at port 3000");
});