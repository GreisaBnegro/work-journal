const sequelize = require("sequelize");
const db = require("../../config/database");
const problem = require("./problemModel");

var device = db.define(
    "gbk_devicetypes",
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

module.exports = device;