const zhc = require('zigbee-herdsman-converters');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const utils = require('zigbee-herdsman-converters/lib/utils');

module.exports = {
  e: zhc.exposes.presets,
  ea: zhc.exposes.access,
  exposes: zhc.exposes,
  fz: zhc.fromZigbeeConverters,
  reporting,
  tz: zhc.toZigbeeConverters,
  utils,
};
