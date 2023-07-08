export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
    {
        field: "phone",
        headerName: "Phone no",
        width: 100,
        sortable: false,
    },
];


export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
        phone: 1234567890
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
        phone: 9876543210
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
        email: "3snow@gmail.com",
        status: "pending",
        age: 45,
        phone: 8976543234
    },
    {
        id: 4,
        username: "Stark",
        img: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
        email: "4snow@gmail.com",
        status: "active",
        age: 16,
        phone: 8874543211
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://www.shareicon.net/data/256x256/2016/05/24/770117_people_512x512.png",
        email: "5snow@gmail.com",
        status: "passive",
        age: 22,
        phone: 7876543290
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg",
        email: "6snow@gmail.com",
        status: "active",
        age: 15,
        phone: 7966543211
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png",
        email: "7snow@gmail.com",
        status: "passive",
        age: 44,
        phone: 6856542210
    },
    {
        id: 8,
        username: "Frances",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLLgM1EB_IEh-fNQ_zl1vwmBu9gFJusgJ-g&usqp=CAU",
        email: "8snow@gmail.com",
        status: "active",
        age: 36,
        phone: 9989654321
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg",
        email: "snow@gmail.com",
        status: "pending",
        age: 65,
        phone: 6876542121
    },
    {
        id: 10,
        username: "Yug",
        img: "https://www.seekpng.com/png/detail/899-8992514_evil-user-silhouette-person-profile-devil-avatar-devil.png",
        email: "snow@gmail.com",
        status: "active",
        age: 65,
        phone: 6876324320
    },
];
