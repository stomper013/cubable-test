const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class Colum extends BaseModal { }

Colum.init(
    {
        name: {type: DataTypes.STRING},
        order: {type: DataTypes.INTEGER, defaultValue: 0},
        isRequired: {type: DataTypes.BOOLEAN, defaultValue: false},
    }, { sequelize: sequelizeServer, modelName: 'Colum' }
)

module.exports = Colum;