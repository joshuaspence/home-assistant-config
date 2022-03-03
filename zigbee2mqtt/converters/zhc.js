const zhc = require('zigbee-herdsman-converters');

module.exports = {
  e: zhc.exposes.presets,
  ea: zhc.exposes.access,
  exposes: zhc.exposes,
  fz: zhc.fromZigbeeConverters,
  tz: zhc.toZigbeeConverters,
};
