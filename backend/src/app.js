require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const aiRoutes = require("../src/routess/ai.routes");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ai", aiRoutes);

module.exports = app;
