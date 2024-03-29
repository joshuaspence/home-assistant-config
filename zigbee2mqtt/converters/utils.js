const { findByZigbeeModel } = require('zigbee-herdsman-converters');

const extendDevice = (model, config) => {
  const { configure: deviceConfigure, ...device } = findByZigbeeModel(model);

  return {
    extend: device,
    ...(config.fromZigbee && { fromZigbee: device.fromZigbee.concat(config.fromZigbee) }),
    ...(config.toZigbee && { toZigbee: device.toZigbee.concat(config.toZigbee) }),
    ...(config.exposes && { exposes: device.exposes.concat(config.exposes) }),
    ...(config.configure && { configure: async (...args) => { await deviceConfigure.apply(this, args); await config.configure.apply(this, args); } }),
  };
};

module.exports = {
  extendDevice,
};
