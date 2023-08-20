const express = require('express');

const { restrictToLoggedInUserOnly } = require('../middlewares/auth');
const reportsRouter = require('./reports.router');
const usersRouter = require('./users.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/reports', reportsRouter);
// api.use('/reports', restrictToLoggedInUserOnly, reportsRouter);

module.exports = api;