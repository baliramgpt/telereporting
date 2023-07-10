import axios from 'axios';
import { ReportData } from '../api/_mock/ReportData';

const API_URL = 'http://localhost:9000';

// async function httpGetPlanets() {
//     const response = await fetch(`${API_URL}/planets`);
//     return await response.json();
//   }

async function getReports() {
    const response = await fetch(`${API_URL}/reports`);
    return await response.json();
  }

// axios.get(`${API_URL}/planets`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });


const KEYS = {
    doctor: 'doctor',
    doctorId: 'doctorId',
    admin: 'admin',
    adminId: 'adminId',
}

export const getDoctorsCollection = () => ([
    { id: '1', title: 'Dr. ABC' },
    { id: '2', title: 'Dr. XYZ' },
    { id: '3', title: 'Dr. PQR' },
    { id: '4', title: 'Dr. EFG' },
])

export const getTestName = () => ([
    { id: '1', title: 'PNS X-RAY OM VIEW' },
    { id: '2', title: 'LEFT XRAY' },
    { id: '3', title: 'RIGHT XRAY' },
    { id: '4', title: 'CHEST XRAY' },
])
export function insertEmployee(data) {
    let doctor = getAllDetails();
    data['id'] = generateEmployeeId()
    doctor.push(data)
    localStorage.setItem(KEYS.doctor, JSON.stringify(doctor))
}

export function updateEmployee(data) {
    let doctor = getAllDetails();
    let recordIndex = doctor.findIndex(x => x.id == data.id);
    doctor[recordIndex] = { ...data }
    localStorage.setItem(KEYS.doctor, JSON.stringify(doctor));
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.doctorId) == null)
        localStorage.setItem(KEYS.doctorId, '0')
    var id = parseInt(localStorage.getItem(KEYS.doctorId))
    localStorage.setItem(KEYS.doctorId, (++id).toString())
    return id;
}


export const getAllDetails = () => {
    if (localStorage.getItem(KEYS.doctor) == null)
        localStorage.setItem(KEYS.doctor, JSON.stringify([]))
    let doctor = JSON.parse(localStorage.getItem(KEYS.doctor));
    let admin = JSON.parse(localStorage.getItem(KEYS.admin));
    let departments = getDoctorsCollection();
    return doctor.map(x => ({
        ...x,
        // department: departments[x.departmentId - 1].title
    }))
}

export const getAllDetailsXray = async () => {
    const reports = await getReports();
    console.log("reports", reports);
    return reports.map(x => ({
        ...x,
        //department: departments[x.departmentId - 1].title
    }));
}