const { extendDevice } = require('./utils');
const { e, tz } = require('./zhc');

module.exports = [
  extendDevice('YRD226 TSDB', {
    toZigbee: [tz.lock_auto_relock_time, tz.lock_sound_volume],
    exposes: [e.auto_relock_time(), e.sound_volume()],
  }),
];
