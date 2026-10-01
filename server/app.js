const express = require("express");

const testRoutes = require("./routes/testRoutes");
const menuRoutes = require("./routes/menuRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/api/test", testRoutes);
app.use("/api/menu", menuRoutes);

module.exports = app;