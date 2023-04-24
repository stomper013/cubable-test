const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");
const Colum = require("./colum.model");

class Board extends BaseModal { }

Board.init(
    {
        name: { type: DataTypes.STRING },
    }, { sequelize: sequelizeServer, modelName: 'Board' }
)

module.exports = Board;