const mongoose = require('mongoose');

const patientHealthParamsSchema = new mongoose.Schema({
    bpSystole: Number,
    bpDiastole: Number,
    spo2: Number,
    pulseRate: Number,
    height: Number,
    weight: Number,
    symptoms: String
})

const reportsSchema = new mongoose.Schema({
    labId: {
        type: Number,
        required: true,
    },
    regNo: {
        type: Number,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: String,
    contact: {
        type: Number,
        required: true,
    },
    referral: {
        type: String,
        required: true,
    },
    testName: {
        type: String,
        required: true,
    },
    testDate: {
        type: Date,
        required: true,
    },
    history: {
        type: Number,
        required: true,
    },
    assignedDoctor: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    reportType: {
        type: String,
        
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    urgent: {
        type: Boolean,
        required: true,
        default: false,
    },
    reviewComment: String,
    patientHealthParams: {
        type: patientHealthParamsSchema,
    },
})

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Report', reportsSchema);