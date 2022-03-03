const { exposes } = require('zigbee-herdsman-converters');
const { extendDevice } = require('./utils');

const e = exposes.presets;
const tz = require('zigbee-herdsman-converters').toZigbeeConverters;

module.exports = [
  extendDevice('YRD226 TSDB', {
    toZigbee: [tz.lock_auto_relock_time, tz.lock_sound_volume],
    exposes: [e.auto_relock_time(), e.sound_volume()],
  }),
];
