const { extendDevice } = require('./utils');
const { e, reporting, tz } = require('./zhc');

module.exports = [
  extendDevice('YRD226 TSDB', {
    toZigbee: [tz.lock_auto_relock_time, tz.lock_sound_volume],
    exposes: [e.auto_relock_time(), e.sound_volume(), e.battery_low()],
    configure: async (device, coordinatorEndpoint, logger) => {
      const endpoint = device.getEndpoint(1);
      await reporting.batteryAlarmState(endpoint);

      // TODO: ZHC should handle this.
      await endpoint.read('genPowerCfg', ['batteryAlarmState']);
    },
  }),
];
