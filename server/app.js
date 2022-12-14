const express = require("express");
const app = express();

const userRouter = require("./router/userRouter");
const articleRouter = require("./router/articleRouter");

app.use(express.json());

// ROUTE
app.use("/user", userRouter);
app.use("/article", articleRouter);

module.exports = app;
