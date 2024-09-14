const Users = require('../models/users')

async function getAllUsers(req, res) {
    try {
        const users = await Users.find();

        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error);
    }
}
async function createUser(req, res) {
    try {
        const userBody = req.body;
        const users = await Users.insertMany(userBody)

        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getAllUsers, createUser };