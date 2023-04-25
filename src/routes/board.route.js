
const express = require('express');
const { resSuccess, resError } = require('../helper/respond');
const { Board, UserBoard, User, Colum, Type, Row, FieldItem } = require('../models');
const { RedisClient } = require('../configs/redis');

const BoardRoute = express.Router();

BoardRoute.post('/', async (req, res, next) => {
    try {
        const { name } = req.body || 'TEST-BOARD'
        const createBoard = await Board.create({ name })
        await Colum.bulkCreate([
            { name: 'Name', isRequired: true, typeId: 1, boardId: createBoard.id },
        ])
        resSuccess(res, createBoard)
    } catch (err) {
        resError(res, err.message)
    }
})

BoardRoute.put('/addUser', async (req, res, next) => {
    try {
        const { userId, boardId } = req.body

        const data = await UserBoard.create({
            userId,
            boardId,
        })

        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }
})

BoardRoute.get('/', async (req, res, next) => {
    try {
        const data = await Board.findAll({
            attributes: ['id', 'name'],
            include: [
                { model: User },
                { model: FieldItem, include: [{ model: Colum }, { model: Type }] },
            ]
        })
        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }
})

BoardRoute.get('/:boardId', async (req, res, next) => {
    try {
        const boardId = req.params.boardId || 1
        const fieldsExclude = ['createdAt', 'updatedAt']
        const data = await Board.findByPk(
            boardId,
            {
                attributes: { exclude: fieldsExclude },
                include: [
                    { model: User },
                    { model: FieldItem, include: [{model: Row}, {model: Colum}] }
                ]
            })
        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }
})

BoardRoute.put('/:boardId/addColum', async (req, res, next) => {
    try {
        const boardId = req.params.boardId || 1
        const { typeId, name } = req.body
        const data = await Colum.create({
            boardId,
            typeId,
            name
        })
        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }

})
module.exports = BoardRoute 