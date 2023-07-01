const express = require('express');

const {getAllReports, addNewReport} = require('../controllers/reports.controller');

const reportsRouter = express.Router();

reportsRouter.get('/', getAllReports);
reportsRouter.post('/', addNewReport);
// reportsRouter.put('/', updateReport);
// reportsRouter.delete('/', removeReport);

module.exports = reportsRouter;