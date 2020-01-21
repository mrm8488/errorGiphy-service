"use strict";

const express = require("express");

const app = express();

require("./index")(app);

const port = process.env.PORT || process.env.port || 3000;
const { name } = require("../package.json");

app.listen(port, () =>
  console.info(`${name} is running at http://localhost:${port}`)
);
