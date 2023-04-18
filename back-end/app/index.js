const userModel = require("./models/userModel");
const executionModel = require("./models/executionModel");
const problemModel = require("./models/problemModel");
const deviceModel = require("./models/deviceModel");
const issueTypeModel = require("./models/issueTypeModel");
const locationModel = require("./models/locationModel");
const sourceModel = require("./models/sourceModel");
const statusModel = require("./models/statusModel");

const model = {};
model.user = userModel;
model.execution = executionModel;
model.problem = problemModel;
model.device = deviceModel;
model.issueType = issueTypeModel;
model.location = locationModel;
model.source = sourceModel;
model.status = statusModel;

model.device.hasMany(model.problem, { foreignKey: 'DeviceTypeID', sourceKey: 'ID' });
model.problem.belongsTo(model.device, { foreignKey: 'DeviceTypeID' });

model.user.hasMany(model.problem, { foreignKey: 'UserId' });
model.problem.belongsTo(model.user, { foreignKey: 'UserId' });

model.source.hasMany(model.problem, { foreignKey: 'SourceId' });
model.problem.belongsTo(model.source, { foreignKey: 'SourceId' });

model.location.hasMany(model.problem, { foreignKey: 'LocationID' });
model.problem.belongsTo(model.location, { foreignKey: 'LocationID' });

model.issueType.hasMany(model.problem, { foreignKey: 'IssueTypeID' });
model.problem.belongsTo(model.issueType, { foreignKey: 'IssueTypeID' });


module.exports = model;