const KEYS = {
    doctor: 'doctor',
    doctorId: 'doctorId'
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

export const getAllDetails = () => {
    if (localStorage.getItem(KEYS.doctor) == null)
        localStorage.setItem(KEYS.doctor, JSON.stringify([]))
    let doctor = JSON.parse(localStorage.getItem(KEYS.doctor));
    let departments = getDoctorsCollection();
    return doctor.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}