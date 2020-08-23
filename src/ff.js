const { spawn } = require("child_process");
const { resolve } = require("path");
const { rejects } = require("assert");
const { kStringMaxLength } = require("buffer");

module.exports = {};

module.exports.checkFFplay = async () => {
  return new Promise((resolve, reject) => {
    try {
      const ls = spawn("ffplay", ["-version"]);
      ls.stderr.on("data", (data) => {
        resolve(false);
      });
      ls.stdout.on("data", (data) => {
        resolve(true);
      });
      ls.on("error", () => {
        resolve(false);
      });
    } catch (error) {
      resolve(false);
    }
  });
};
