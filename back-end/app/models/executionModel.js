const sequelize = require("sequelize");
const db = require("../../config/database");

var execution = db.define(
    "gbk_executions",
    {
        // ID int
        ID: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        // FullName varchar(50)
        Action: { type: sequelize.STRING },
        StatusID: { type: sequelize.INTEGER },
        ExecutionDate: { type: sequelize.DATE },
        ExecuteTime: { type: sequelize.INTEGER },
        UserId: { type: sequelize.INTEGER }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = execution;