const express = require('express');
const config = require('./config').config;
const service = require('./service');

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

let chart1 = { "type": "line", "data": { "labels": ["January", "February", "March", "April", "May", "June"], "datasets": [{ "label": "My First dataset", "backgroundColor": "rgb(255, 99, 132)", "borderColor": "rgb(255, 99, 132)", "data": [0, 10, 5, 2, 20, 30, 45] }] }, "options": {} };

const temp = `Czas,Temperatura
2023-11-09 10:00:00,10
2023-11-09 11:00:00,13
2023-11-09 12:00:00,16
2023-11-09 13:00:00,18
2023-11-09 14:00:00,19
2023-11-09 15:00:00,19
2023-11-09 16:00:00,17`;

const dataChart2 = service.convertData(temp);
const chart2 = JSON.stringify(dataChart2);

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 }
];

let addHistory = [];
let mulHistory = [];
let divHistory = [];
let subHistory = [];

app.get('/', (request, response) => {
    response.render(
        __dirname + "/index.html",
        {
            subject: 'Technologie aplikacji webowych',
            chart1: JSON.stringify(chart1),
            chart2: chart2,
            products: JSON.stringify(products),
        }
    );
});

app.get('/template/:variant/:a/:b', (request, response) => {
    const pushToHistory = (history, result) => {
        history.push({
            result: result,
            time: Date.now()
        });
    }
    const { variant } = request.params;

    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);

    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = (b == 0) ? NaN : (a / b);

    let result;
    let history;
    switch (variant) {
        case 'add':
            result = a + b;
            pushToHistory(addHistory, result);
            history = addHistory;
            break;
        case 'sub':
            result = a - b;
            pushToHistory(subHistory, result);
            history = subHistory;
            break;
        case 'multiply':
            result = a * b;
            pushToHistory(mulHistory, result);
            history = mulHistory;
            break;
        case 'divide':
            result = (b == 0) ? NaN : (a / b);
            pushToHistory(divHistory, result);
            history = divHistory;
            break;
        default:
            response.status(404).render(__dirname + "/notFound.html", {
                message: "Invalid operation"
            });
            break;
    }

    response.render(__dirname + "/result.html", {
        a: a,
        b: b,
        variant: variant,
        result: result,
        history: JSON.stringify(history),
    })

});


app.listen(config.port, () => {
    console.info("Server is running at port 3000");
});
