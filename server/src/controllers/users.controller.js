const { v4: uuidv4 } = require('uuid');

const users = require('../models/users.model');
const { getUser, setUser } = require('../utils/auth')

let DEFAULT_USER_ID = 1000;

let DEFAULT_PASSWORD = "newuser";

async function getLatestUserId() {
    const latestUser = await users
        .findOne()
        .sort('-userId');

    if (!latestUser) {
        return DEFAULT_USER_ID;
    }

    return latestUser.userId;
}

// GET /api/users
const getUsers = async (req, res) => {
    return res.status(200).json(await users.find({}, { '_id': 0, '__v': 0 }));
};

// POST /api/users
const createUser = async (req, res) => {
    const newUserId = await getLatestUserId() + 1;

    const newUser = Object.assign(req.body, {
        userId: newUserId,
        password: DEFAULT_PASSWORD,
    })
    console.log("newUser", newUser);
    try {
        const user = await users.create(newUser);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
};

// POST /api/users/login
const login = async (req, res) => {
    const { email, password, role } = req.body;
    const user = await users.findOne({ email, password, role }); 

    if(!user){
        return res.status(401).json({error: "Invalid username or password"});
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    res.status(200).json({name: user.name, email: user.email, contactNo: user.contactNo, address: user.address, role: user.role});
}

module.exports = { getUsers, createUser, login };