const { extendDevice } = require('./utils');
const { ea, exposes } = require('./zhc');

module.exports = [
  extendDevice('LOM005', {
    exposes: [
      exposes.enum('power_on_behavior', ea.ALL, ['off', 'recover', 'on'])
        .withProperty('hue_power_on_behavior')
        .withDescription('Controls the behavior when the device is powered on'),
    ],
  }),
];
