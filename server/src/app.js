const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const reportsRouter = require('./routes/reports.router');
const usersRouter = require('./routes/users.router');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(morgan('combined'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/users', usersRouter);
app.use('/reports', reportsRouter);

app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;