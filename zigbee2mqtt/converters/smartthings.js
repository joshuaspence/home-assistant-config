const { extendDevice } = require('./utils');
const { e, fz, tz } = require('./zhc');

module.exports = [
  extendDevice('ZB-ONOFFPlug-D0005', {
    fromZigbee: [fz.power_on_behavior],
    toZigbee: [tz.power_on_behavior],
    exposes: [e.power_on_behavior()],
  }),
];
