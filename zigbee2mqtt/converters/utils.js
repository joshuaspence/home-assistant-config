const {findByZigbeeModel} = require('zigbee-herdsman-converters');

const extendDevice = (model, config) => {
  const device = findByZigbeeModel(model);

  return {
    extend: device,
    exposes: device.exposes.concat(config.exposes || []),
  };
};

module.exports = {
  extendDevice,
};
