const sequelize = require('../configs/sequelize');

const User = require('./user.model');
const Board = require('./board.model');
const Colum = require('./colum.model');
const Type = require('./type.model');
const Row = require('./row.model');
const FieldItem = require('./fieldItem.model');
const UserBoard = require('./userBoard.model');

const TypeConstants = require('../constants/TypeConstants');

User.belongsToMany(Board, { through: 'UserBoard', foreignKey: 'userId' });
Board.belongsToMany(User, { through: 'UserBoard', foreignKey: 'boardId' });


Board.hasMany(Row, { foreignKey: 'boardId' });
Row.belongsTo(Board, { foreignKey: 'boardId' });

Board.hasMany(Colum, { foreignKey: 'boardId' });
Colum.belongsTo(Board, { foreignKey: 'boardId' });

Board.hasMany(FieldItem, { foreignKey: 'boardId' });

FieldItem.belongsTo(Board, { foreignKey: 'boardId' });
FieldItem.belongsTo(Row, { foreignKey: 'rowId' });
FieldItem.belongsTo(Colum, { foreignKey: 'columId' });

Colum.belongsTo(Type, { foreignKey: 'typeId' });
Colum.belongsTo(Board, { foreignKey: 'boardId' });

sequelize.sync({
    // force: true
}).then(async () => {
    const count = await Type.count({ where: {} })
    count < 1 ? await Type.bulkCreate(TypeConstants) : [true]
})

module.exports = { User, Board, UserBoard, Colum, Type, Row, FieldItem }

// Board 1 - N Row
// Board 1 - N FieldItem

// Row 1 - N Colum
// Colum 1 - 1 Type

// FieldItem 1 - 1 Row
// FieldItem 1 - 1 Colum
