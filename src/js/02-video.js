import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTimeUpdate, 1000));

function currentTimeUpdate(evt) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(evt.seconds));
};

const currentTimeAfterStop = localStorage.getItem(LOCALSTORAGE_KEY);

if (currentTimeAfterStop) {
    player.setCurrentTime(currentTimeAfterStop);
};
