"use strict";

const lib = require("./lib/index");

module.exports = (app) => {

app.get('/', (req, res) => res.status(200).send({message: 'It is working!'}));

app.get('/:code', async function (req, res) {

  try{
  const URL = await lib.makeURL(req.params.code);
  const gif = await lib.execBashCommand(URL);
  res.send(`<img src=${gif}>`);
  }catch (error) {
    res.send(`${error}`);
  }
});
};
