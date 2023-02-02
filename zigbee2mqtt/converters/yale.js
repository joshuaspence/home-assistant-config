const { extendDevice } = require('./utils');
const { ea, exposes, utils } = require('./zhc');

const fzLocal = {
  inside_status_led: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('enableInsideStatusLed')) {
        return { inside_status_led: !!msg.data.enableInsideStatusLed };
      }

      return {};
    },
  },
};

const tzLocal = {
  inside_status_led: {
    key: ['inside_status_led'],
    convertSet: async (entity, key, value, meta) => {
      await entity.write('closuresDoorLock', { enableInsideStatusLed: value }, utils.getOptions(meta.mapped, entity));
      return { state: { [key]: value } };
    },
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['enableInsideStatusLed']);
    },
  },
};

module.exports = [
  extendDevice('YRD226 TSDB', {
    fromZigbee: [fzLocal.inside_status_led],
    toZigbee: [tzLocal.inside_status_led],
    exposes: [
      exposes.binary('inside_status_led', ea.ALL, true, false).withDescription('Enable/disable inside status LED'),
    ],
  }),
];
