const express = require("express");
const morgan = require("morgan");
const userRoute = require("./app/routes/userRoutes");
const problemRoute = require("./app/routes/problemRoutes")
const executionRoute = require("./app/routes/executionRoutes")
const statusRoute = require("./app/routes/statusRoutes")
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/problem", problemRoute);
app.use("/executions", executionRoute);
app.use("/status", statusRoute);

app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});


module.exports = app;