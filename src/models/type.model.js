const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class Type extends BaseModal { }

Type.init(
    {
        value: { type: DataTypes.STRING },
    },
    { sequelize: sequelizeServer, modelName: 'Type' }
)

module.exports = Type;