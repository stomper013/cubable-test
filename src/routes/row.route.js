
const express = require('express');
const { resSuccess, resError } = require('../helper/respond');
const { Row, FieldItem, Colum, Board } = require('../models');

const RowRoute = express.Router();

RowRoute.post('/:boardId', async (req, res, next) => {
    try {
        const boardId = req.params.boardId
        const { value } = req.body

        const rowCreate = await Row.create({ boardId })
        const allColumInBoard = await Colum.findAll({ where: { boardId } })

        const createBulkFieldItemByColum = allColumInBoard.map(colum => {
            const valueRequireField = colum.isRequired ? value : null
            return {
                value: valueRequireField,
                columId: colum.id,
                rowId: rowCreate.id,
                boardId,
            }
        })
        const createInitFieldsItem = await FieldItem.bulkCreate(createBulkFieldItemByColum)
        resSuccess(res, createInitFieldsItem)
    } catch (err) {
        resError(res, err.message)
    }
})

RowRoute.delete('/:boardId', async (req, res, next) => {
    try {
        const boardId = req.params.boardId
        await Board.destroy({ where: { id: boardId } })
        resSuccess(res, createInitFieldsItem)
    } catch (err) {
        resError(res, err.message)
    }
})

module.exports = RowRoute 