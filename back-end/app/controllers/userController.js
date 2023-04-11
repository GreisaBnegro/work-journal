const { user } = require("../index");
const { Op } = require("sequelize");
const controller = {};


/// Get all users
controller.getAll = async function (req, res) {
    try {
        const userData = await user.findAll();
        if (userData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: userData });
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

/// get user by name
controller.getUsername = async function (req, res) {
    try {
        var userData = await user.findAll({
            where: {
                FullName: {
                    [Op.like]:
                        `%${req.params.fullname}%`
                }
            },
        });
        if (userData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: userData });
        } else {
            res
                .status(204)
                .json({ message: "There is no data", data: [] });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

controller.getUserId = async function (req, res) {
    try {
        var userData = await user.findAll({
            where: {
                ID: {
                    [Op.eq]:
                        req.params.userid
                }
            },
        });
        if (userData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: userData });
        } else {
            res
                .status(204)
                .json({ message: "There is no data", data: [] });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

/// insert new user
controller.createNew = async function (req, res) {
    try {
        //   check data has already been created
        const checkData = await user.findAll({
            where: {
                FullName: {
                    [Op.eq]: req.body.fullname,
                },
            },
        });
        if (checkData.length > 0) {
            res.status(409).json({ message: "username/password has         already in use" });
        } else {
            await user
                .create({
                    FullName: req.body.fullname,
                })
                .then((result) => {
                    res.status(201).json({
                        message: "user successful created", data: result,
                    });
                });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

/// update user
controller.editAt = async function (req, res) {
    try {
        await user
            .findAll({ where: { ID: req.body.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await user.update(
                        {
                            FullName: req.body.fullname,
                        },
                        { where: { ID: req.body.id } }
                    ).then((updateResult) => {
                        res.status(200).json({
                            message: "update successful",
                            data: updateResult,
                        });
                    });
                } else {
                    res.status(404).json({ message: "update failed" });
                }
            });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

/// delete user
controller.deleteUser = async function (req, res) {
    try {
        await user
            .findAll({ where: { ID: req.body.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await user.destroy({ where: { ID: req.body.id } });
                    res.status(200).json({ message: "delete user successfully" });
                } else {
                    res.status(404).json({ message: "user not found" });
                }
            });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

module.exports = controller;