const express = require('express');
const { resSuccess, resError } = require('../helper/respond');
const { Board, UserBoard, User, Colum, Type, Row, FieldItem } = require('../models');
const { RedisClient } = require('../configs/redis');

const FieldRoute = express.Router();

FieldRoute.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const { value } = req.body
        const data = await FieldItem.update({ value }, { where: { id } })
        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }
})

FieldRoute.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await FieldItem.destroy({where: {id}})
        resSuccess(res, data)
    } catch (err) {
        resError(res, err.message)
    }
})

module.exports = FieldRoute