const { status } = require("../index");
const { Op } = require("sequelize");
const controller = {};


/// Get all statuses
controller.getAll = async function (req, res) {
    try {
        const statusData = await status.findAll();
        // const problemData = await problem.findAll();
        if (statusData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: statusData });
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