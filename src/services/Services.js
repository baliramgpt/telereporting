const KEYS = {
    doctor: 'doctor',
    doctorId: 'doctorId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Dr. ABC' },
    { id: '2', title: 'Dr. XYZ' },
    { id: '3', title: 'Dr. PQR' },
    { id: '4', title: 'Dr. EFG' },
])

export const getAllDetails = () => {
    if (localStorage.getItem(KEYS.doctor) == null)
        localStorage.setItem(KEYS.doctor, JSON.stringify([]))
    let doctor = JSON.parse(localStorage.getItem(KEYS.doctor));
    let departments = getDepartmentCollection();
    return doctor.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}