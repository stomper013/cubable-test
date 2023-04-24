
const express = require('express');
const { resSuccess, resError } = require('../helper/respond');
const { Board, UserBoard, User, Colum } = require('../models');

const ColumRoute = express.Router();

ColumRoute.post('/', async (req, res, next) => {
    try {
        const { name, order, type, rowId } = req.body || 'TEST-COL'
        const createColum = await Colum.create({
            name,
            order,
            type,
            rowId: rowId || 1,
        })
        resSuccess(res, createColum)
    } catch (err) {
        resError(res, err.message)
    }
})

module.exports = ColumRoute 