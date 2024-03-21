// Exc. 1
const express = require('express');
const questions = require('./questions').questions;
const port = require('./config').port;

const app = express();

app.get('/api/questions', (request, response) => {
    response.send(questions);
});

app.get('/api/questions/:id', (request, response) => {
    const requestId = request.params.id 
    if(requestId >= 0 && requestId < questions.length) {
        response.send(questions[requestId]);
    } else {
        response.status(404).send("not found");
    }
})


app.listen(port, () => {
    console.info("Server is running at port " + port);
});

