const express = require('express');
const config = require('./config').config;

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render(__dirname + "/index.html", {});
});

app.listen(config.port, () => {
    console.info("Server is running at port 3000");
});