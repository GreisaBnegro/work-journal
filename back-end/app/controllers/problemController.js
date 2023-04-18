const { problem, device, user, location, issueType, source } = require("../index");
const { Op } = require("sequelize");
const controller = {};


/// Get all problems
controller.getAll = async function (req, res) {
    try {
        const problemData = await problem.findAll({ include: [device, user, location, issueType, source] });
        // const problemData = await problem.findAll();
        if (problemData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: problemData });
        } else {
            res
                .status(204)
                .json({ message: "There is no data", data: [] });
        }
    } catch (error) {
        res
            .status(500)
            .json({ message: error });
    }
};

module.exports = controller;