const sequelize = require("sequelize");
const db = require("../../config/database");

var problem = db.define(
    "gbk_problemos",
    {
        // ID int
        ID: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        // FullName varchar(50)
        ProblemDate: { type: sequelize.DATE },
        UserId: { type: sequelize.INTEGER },
        SourceId: { type: sequelize.INTEGER },
        ProblemDescription: { type: sequelize.STRING },
        LocationID: { type: sequelize.INTEGER },
        DeviceTypeID: { type: sequelize.INTEGER },
        IssueTypeID: { type: sequelize.INTEGER },
        Remarks: { type: sequelize.STRING }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = problem;