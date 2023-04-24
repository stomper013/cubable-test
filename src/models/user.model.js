const { DataTypes } = require("sequelize");
const { sequelizeServer } = require("../configs");
const BaseModal = require("./base.model");

class User extends BaseModal { }

User.init(
    {
        email: { type: DataTypes.STRING, defaultValue: 'a@gmail.com' },
        password: { type: DataTypes.STRING, defaultValue: '123' },
    },
    { sequelize: sequelizeServer, modelName: 'User' }
)
module.exports = User;