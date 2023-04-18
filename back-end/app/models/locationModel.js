const sequelize = require("sequelize");
const db = require("../../config/database");

var location = db.define(
    "gbk_location",
    {
        // ID int
        ID: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        // FullName varchar(50)
        Name: { type: sequelize.STRING }
        // CreatedDate timestamp
        // LastEdited datetime
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = location;