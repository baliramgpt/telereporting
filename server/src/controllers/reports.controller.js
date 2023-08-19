const reports = require('../models/reports.model');

// let DEFAULT_REG_NO = 1000;

// async function getLatestRegNo(){
//     const latestReport = await reports
//         .findOne()
//         .sort('-regNo');

//     if(!latestReport){
//         return DEFAULT_REG_NO;
//     }

//     return latestReport.regNo;
// }

async function getAllReports(req, res) {
    return res.status(200).json(await reports.find({}, { '_id': 0, '__v': 0 }));
}

async function addNewReport(req, res) {
    // const newRegNo = await getLatestRegNo() + 1;
    const report = JSON.parse(req.body.payload);
    const fileData = req.file.filename;

    report.file = fileData;

    console.log(report, "jhvghdgwjfkjdkfw", report.testDate, "filename", fileData);
    try {
        report.testDate = new Date(report.testDate);
        if (isNaN(report.testDate)) {
            return res.status(400).json({
                error: 'Invalid test date',
            })
        }
        // reports.set(latestRegNo, Object.assign(report));
        // await reports.updateOne({}, {$set: newReport});
        // await reports.findOneAndUpdate({
        //     regNo: newRegNo,
        // }, newReport, {
        //     upsert: true,
        // });

        const reportSaved = await reports.create(report);
        res.status(201).json(reportSaved);
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = {
    getAllReports,
    addNewReport
}