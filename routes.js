"use strict";

const lib = require("./lib/index");

module.exports = app => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "It is working!"
    })
  );

  app.get("/:code", async (req, res) => {
    try {
      const URL = await lib.makeURL(req.params.code);
      const gif = await lib.execBashCommand(URL);
      return res.format({
        html: () => res.send(`<img src=${gif}>`),

        json: () =>
          res.json({
            success: true,
            gifUrl: gif
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
};
