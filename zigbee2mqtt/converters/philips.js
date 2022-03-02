const {exposes} = require('zigbee-herdsman-converters');
const {extendDevice} = require('./utils');

const e = {
  hue_power_on_behavior: () => exposes.enum('power_on_behavior', exposes.access.ALL, ['off', 'recover', 'on'])
      .withProperty('hue_power_on_behavior')
      .withDescription('Controls the behavior when the device is powered on'),
};

module.exports = [
  extendDevice('LOM005', {exposes: [e.hue_power_on_behavior()]}),
];
