const express = require("express");
const logger = require("./utils/logger");
const error = require("./utils/error");
const authrouter = require("./routes/authrouter");

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1/auth', authrouter);

app.use(error);

module.exports = app;