const express = require('express');
const { getUsers, createUser, login } = require('../controllers/users.controller');

const usersRouter = express.Router();

// GET /api/users
usersRouter.get('/', getUsers);

// POST /api/users
usersRouter.post('/', createUser);
usersRouter.post('/login', login);

module.exports = usersRouter;