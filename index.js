"use strict";

const express = require("express");
const app = express();

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

/* MIDDLEWARE (stack inspired by kikobeats) */

app
  .use(require("helmet")())
  .use(require("compression")())
  .use(require("cors")())
  .use(require("morgan")(isProduction ? "combined" : "dev"))
  .disable("x-powered-by");

require("./routes.js")(app);

app.get("*", (req, res) =>
  res.format({
    html: () => res.status(404).send(`Resource not found!`),

    json: () =>
      res.status(404).json({
        success: false,
        error: `resource not found`
      })
  })
);

app.listen(port, () => console.info(`Express server running on port ${port}`));
