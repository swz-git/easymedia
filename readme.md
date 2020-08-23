# EasyMedia

A node media player powered by ffmpeg.

## Installing

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
