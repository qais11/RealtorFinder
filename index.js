const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/dist/')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`listening on port ${port}!`))