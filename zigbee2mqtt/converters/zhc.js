const zhc = require('zigbee-herdsman-converters');
const reporting = require('zigbee-herdsman-converters/lib/reporting');

module.exports = {
  e: zhc.exposes.presets,
  ea: zhc.exposes.access,
  exposes: zhc.exposes,
  fz: zhc.fromZigbeeConverters,
  reporting,
  tz: zhc.toZigbeeConverters,
};
