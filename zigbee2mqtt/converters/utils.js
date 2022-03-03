const { findByZigbeeModel } = require('zigbee-herdsman-converters');

const extendDevice = (model, config) => {
  const device = findByZigbeeModel(model);

  return {
    extend: device,
    ...(config.fromZigbee && { fromZigbee: device.fromZigbee.concat(config.fromZigbee) }),
    ...(config.toZigbee && { toZigbee: device.toZigbee.concat(config.toZigbee) }),
    ...(config.exposes && { exposes: device.exposes.concat(config.exposes) }),
  };
};

module.exports = {
  extendDevice,
};
