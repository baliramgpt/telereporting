const users = require('../models/users.model');

let DEFAULT_USER_ID = 1000;

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
    try {
        const users = await users.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /api/users
const createUser = async (req, res) => {
    const newUserId = await getLatestUserId() + 1;

    const newUser = Object.assign(req.body, {
        userId: newUserId,
    })
    console.log("newUser", newUser);
    try {
        const user = await users.create(newUser);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
};

module.exports = { getUsers, createUser };