"use strict";

const { exec } = require("child_process");

const baseURL = "https://giphy.com/search/";
const curlCommand = "curl -s";
const filterRequestCommand = `grep '"original":' | tr "," "\n" | grep '^ \"url' | cut -f1 -d "?" | grep ".gif"$ | head -4 | tail -1 | cut -f3 -d " " | tr -d '"'`;
const allowedCodesArray = [
  "200",
  "201",
  "204",
  "400",
  "401",
  "403",
  "404",
  "500",
  "503"
];
const sortBy = ["relevant"];
const codesSet = new Set(allowedCodesArray);

const execBashCommand = command => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err);

      resolve(stdout);
    });
  });
};

const wordsForError = () => {
  return {
    200: ["ok", "success", "wonderful", "cool"],
    201: ["newborn", "new", "pop", "surprise"],
    204: ["empty", "no-content", "nothing"],
    400: ["error", "bad", "wtf"],
    401: ["unauthorized", "no-way", "no"],
    403: ["forbidden", "stop"],
    404: ["not-found", "cannot-see", "where-is-it"],
    500: ["demolition", "destruction", "burst", "exploding"],
    503: ["unavailable", "not-ready"]
  };
};

const chooseRandom = array => array[Math.floor(Math.random() * array.length)];

const makeURL = code => {
  return new Promise((resolve, reject) => {
    if (!code || code.length < 3) reject("No valid code!");

    if (!codesSet.has(code)) reject("code do not managed!");

    const wordsForUrlArray = wordsForError()[Number.parseInt(code)];
    const wordForURL = chooseRandom(wordsForUrlArray);
    const sortByForURL = chooseRandom(sortBy);

    console.log(`${curlCommand} ${baseURL}${wordForURL}?sort=${sortByForURL} | ${filterRequestCommand}`);

    resolve(
      `${curlCommand} ${baseURL}${wordForURL}?sort=${sortByForURL} ${filterRequestCommand}`
    );
  });
};

module.exports = {
  makeURL,
  execBashCommand
};
