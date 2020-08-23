const { spawn } = require("child_process");
const EventEmitter = require("events");
const ff = require("./ff.js");

module.exports = {};

async function main() {
  if (!(await ff.checkFFplay())) {
    console.error(
      "FFmpeg (specifically ffplay) is not installed, you can install it at https://ffmpeg.org/download.html"
    );
    return;
  }
}
main();

module.exports.Sound = class Sound {
  constructor(path) {
    this.path = path;
  }
  play() {
    this.player = spawn("ffplay", ["-nodisp", "-autoexit", this.path]);
    this.player.stdout.on("data", (d) => {
      console.log(d.toString());
    });
  }
  stop() {
    if (this.player) {
      this.player.kill();
    }
  }
};
module.exports.Media = class Media {
  constructor(path) {
    this.path = path;
  }
  play(window_title = "EasyMedia") {
    this.player = spawn("ffplay", [
      "-autoexit",
      "-window_title",
      window_title,
      this.path,
    ]);

    this.player.on("exit", () => {
      this.player = undefined;
    });
  }
  stop() {
    if (this.player) {
      this.player.kill();
    }
  }
};
