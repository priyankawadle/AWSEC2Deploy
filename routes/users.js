const { Router } = require("express");

const userController = require('../controllers/users')
const app = Router();

app.get('/api/getUsers', userController.getAllUsers);
app.post('/api/createUser', userController.createUser)

module.exports = app;