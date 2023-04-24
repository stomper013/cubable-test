const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class Row extends BaseModal { }

Row.init(
    {},
    { sequelize: sequelizeServer, modelName: 'Row' }
)

module.exports = Row;