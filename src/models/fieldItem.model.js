const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class FieldItem extends BaseModal { }

FieldItem.init(
    {
        columId: { type: DataTypes.INTEGER },
        rowId: { type: DataTypes.INTEGER },
        value: { type: DataTypes.STRING },
    }, { sequelize: sequelizeServer, modelName: 'FieldItem' }
)

module.exports = FieldItem;