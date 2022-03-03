const { exposes } = require('zigbee-herdsman-converters');
const { extendDevice } = require('./utils');

const e = {
  ...exposes.presets,

  hue_power_on_behavior: () => exposes.enum('power_on_behavior', exposes.access.ALL, ['off', 'recover', 'on'])
    .withProperty('hue_power_on_behavior')
    .withDescription('Controls the behavior when the device is powered on'),
};

const lights = [
  'LCA001',
  'LCT010',
  'LTD011',
  'LTG002',
  'LTW013',
  'LWA001',
  '1743530P7',
];
const plugs = ['LOM005'];

module.exports = [
  ...lights.concat(plugs).map(device => extendDevice(device, {exposes: [e.hue_power_on_behavior()]})),
];
