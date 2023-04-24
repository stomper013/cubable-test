
const express = require('express');
const { resSuccess, resError } = require('../helper/respond');
const { Board, UserBoard, User } = require('../models');

const UserRoute = express.Router();

UserRoute.post('/', async (req, res, next) => {
    try {
        const { name } = req.body || 'TEST'
        const createBoard = await User.create({ name })
        resSuccess(res, createBoard)
    } catch (err) {
        resError(res, err.message)
    }
})

UserRoute.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id

        const userData = await User.findByPk(id, { include: [{ model: Board }] });
        resSuccess(res, userData)

    } catch (err) {
        resError(res, err.message)
    }
})

module.exports = UserRoute 