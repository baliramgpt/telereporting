const express = require('express');
const multer = require('multer');
const {v4 : uuidv4} = require('uuid');

const {getAllReports, addNewReport} = require('../controllers/reports.controller');


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        return cb(null, `${uuidv4()}-${Date.now()}-${file.originalname}`);
    },
})

const upload = multer({ storage })

const reportsRouter = express.Router();

reportsRouter.get('/', getAllReports);
reportsRouter.post('/', upload.single("file") , addNewReport);
// reportsRouter.put('/', updateReport);
// reportsRouter.delete('/', removeReport);

module.exports = reportsRouter;