# EasyMedia

A node media player powered by ffmpeg.

## Installing

Make sure to have ffmpeg installed.
If you do not you can install it via
this tutorial from [Windowsloop](https://windowsloop.com/install-ffmpeg-windows-10/#download-ffmpeg).

Type `npm i -s easymedia` into your terminal/console.

## Usage

### Play sound from link or local path

```js
const { Sound } = require("easymedia");

let mySound = new Sound("https://example.com/sound.mp3");
mySound.play();
```

### Play media (a video) from link or local path

```js
const { Media } = require("easymedia");

let myFilm = new Media("https://example.com/video.mov");
myFilm.play();
```
