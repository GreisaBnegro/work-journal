const sequelize = require("sequelize");
const db = require("../../config/database");

var user = db.define(
    "gbk_users",
    {
        // ID int
        ID: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        // FullName varchar(50)
        FullName: { type: sequelize.STRING }
        // CreatedDate timestamp
        // LastEdited datetime
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = user;