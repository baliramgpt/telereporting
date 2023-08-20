const { getUser } = require('../utils/auth');

async function restrictToLoggedInUserOnly(req, res, next){
    const userUid = req.cookies?.uid;
    if(!userUid){
        return res.status(401).json({error: "User not logged in"});
    }
    const user = getUser(userUid);
    if(!user){
        return res.status(401).json({error: "User not logged in"});
    }
    req.user = user;
    next();
}

module.exports = { restrictToLoggedInUserOnly };