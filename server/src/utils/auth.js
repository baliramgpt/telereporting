const seesionIdToUserMap = new Map();

function setUser(id, user){
    seesionIdToUserMap.set(id, user);
}

function getUser(id){
    seesionIdToUserMap.get(id);
}

module.exports = {
    getUser,
    setUser
}