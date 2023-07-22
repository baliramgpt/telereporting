const express = require('express');
const { getUsers, createUser } = require('../controllers/users.controller');

const usersRouter = express.Router();

// GET /api/users
usersRouter.get('/', getUsers);

// POST /api/users
usersRouter.post('/', createUser);

module.exports = usersRouter;