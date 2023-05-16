const { execution, status, user } = require("../index");
const { Op } = require("sequelize");
const controller = {};


/// Get all executions
controller.getAll = async function (req, res) {
    try {
        const executionData = await execution.findAll({ include: [user, status] });
        // const problemData = await problem.findAll();
        if (executionData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: executionData });
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

controller.createNew = async function (req, res) {
    try {
        // req.body. ..
        await execution
            .create({
                Action: req.body.actionName,
                StatusID: req.body.status,
                ExecutionDate: req.body.ExecutionDate,
                ExecuteTime: req.body.ExecuteTime,
                UserId: req.body.actionuser
            })
            .then((result) => {
                res.status(201).json({
                    message: "execution successfully created", data: result,
                });
            });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

module.exports = controller;