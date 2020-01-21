"use strict";

const { makeURL, execBashCommand } = require("../lib");

const isProduction = process.env.NODE_ENV === "production";

module.exports = app => {
  app
    .use(require("helmet")())
    .use(require("compression")())
    .use(require("cors")())
    .use(require("morgan")(isProduction ? "combined" : "dev"))
    .disable("x-powered-by");

  app.get("/", (req, res) =>
    res.status(200).send({
      message: "It is working!"
    })
  );

  app.get("/:code", async (req, res) => {
    try {
      const URL = await makeURL(req.params.code);
      const gif = await execBashCommand(URL);
      return res.format({
        html: () => res.send(`<img src="${gif}">`),

        json: () =>
          res.json({
            success: true,
            gifUrl: `"${gif}"`
          })
      });
    } catch (error) {
      return res.format({
        html: () => res.send(`${error}`),

        json: () =>
          res.json({
            success: false,
            error
          })
      });
    }
  });

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

  return app;
};
