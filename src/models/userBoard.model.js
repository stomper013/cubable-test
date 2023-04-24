const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class UserBoard extends BaseModal { }

UserBoard.init(
    {
        boardId: { type: DataTypes.INTEGER },
        userId: { type: DataTypes.INTEGER },
    }, { sequelize: sequelizeServer, modelName: 'UserBoard' }
)

module.exports = UserBoard;