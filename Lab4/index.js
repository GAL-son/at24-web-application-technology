// Exc. 1
const express = require('express');
const questions = require('./questions').questions;
const port = require('./config').port;

const app = express();

app.get('/api/questions', (request, response) => {
    response.send(questions);
});


app.listen(port, () => {
    console.info("Server is running at port " + port);
});

