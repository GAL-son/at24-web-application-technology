// Exc. 1
const express = require('express');
const questions = require('./questions').questions;
const port = require('./config').port;

const app = express();
app.use(express.json());

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

// Used /api/questions path because /api/questions/:id doesen't sound right.
// I would use this path for PUT to modify the questions or sth.
app.post('/api/questions', (request, response) => {
    const newQuestion = request.body;

    const invalidRequest = (message) => {
        response.status(400).send(message);
    }

    const questionFields = ["category","type","difficulty","question", "correct_answer","answers"];
    questionFields.forEach(field => {
        if(!Object.hasOwn(newQuestion, field)) {
            invalidRequest("missinng " + field + " field") ;
            return;
        }
    });

    if(typeof(newQuestion.answers) != typeof([])) {
        invalidRequest("field answers must be an array");
        return;
    }

    questions.push(newQuestion);
    response.status(201).send(newQuestion);
})


app.listen(port, () => {
    console.info("Server is running at port " + port);
});

