const { extendDevice } = require('./utils');
const zhc = require('zigbee-herdsman-converters');

const baseDevice = {
  zigbeeModel: ['Test'],
  model: 'Test',
  vendor: 'Test',
  description: 'Test',
  fromZigbee: [],
  toZigbee: [],
  exposes: [],
};
zhc.addDeviceDefinition(baseDevice);

test('extendDevice', () => {
  expect(extendDevice(baseDevice.zigbeeModel[0], {})).toStrictEqual({
    extend: baseDevice,
  });
});
