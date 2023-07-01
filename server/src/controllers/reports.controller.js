const { reports } = require('../models/reports.model');

async function getAllReports() {
    return await reports.find({});
}

function addNewReport(req, res) {
    const report = req.body;

    // if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
    //     return res.status(400).json({
    //         error: "Missing requires launch property",
    //     });
    // }

    try {
        report.testDate = new Date(report.testDate);
        if (isNaN(report.testDate)) {
            return res.status(400).json({
                error: 'Invalid test date',
            })
        }

        latestRegNo += 1;
        reports.set(latestRegNo, Object.assign(report));
    }
    catch (err) {
        console.error(err)
    }
    return res.status(201).json(report);
}

// function httpGetAllLaunches(req,res) {
//     return res.status(200).json(getAllLaunches());
// }

// function httpAddNewLaunch(req, res) {
//     const launch = req.body;

//     if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
//         return res.status(400).json({
//             error: "Missing requires launch property",
//         });
//     }

//     launch.launchDate = new Date(launch.launchDate);
//     if(isNaN(launch.launchDate)){
//         return res.status(400).json({
//             error: 'Invalid launch date',
//         })
//     }

//     addNewLaunch(launch);
//     return res.status(201).json(launch);
// }

// function httpAbortLaunch(req, res){
//     const launchId = Number(req.params.id);

//     if(!existsLaunchWithId(launchId)){
//         return res.status(404).json({
//             error: 'Launch not found',
//         })
//     }

//     const aborted = abortsLaunchById(launchId);
//     return res.status(200).json(aborted);
// }

module.exports = {
    getAllReports,
    addNewReport
}