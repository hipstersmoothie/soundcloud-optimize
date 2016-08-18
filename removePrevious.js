var $ = require('./jquery-3.1.0.slim.min')

setInterval(function() {
   $('.sound.playing').closest('.soundList__item').prevAll().remove()
}, 1000 * 60 * 5);
