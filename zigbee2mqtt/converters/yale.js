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

  one_touch_locking: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('enableOneTouchLocking')) {
        return { one_touch_locking: !!msg.data.enableOneTouchLocking };
      }

      return {};
    },
  },

  privacy_mode_button: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('enablePrivacyModeButton')) {
        return { one_touch_locking: !!msg.data.enablePrivacyModeButton };
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

  one_touch_locking: {
    key: ['one_touch_locking'],
    convertSet: async (entity, key, value, meta) => {
      await entity.write('closuresDoorLock', { enableOneTouchLocking: value }, utils.getOptions(meta.mapped, entity));
      return { state: { [key]: value } };
    },
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['enableOneTouchLocking']);
    },
  },

  privacy_mode_button: {
    key: ['privacy_mode_button'],
    convertSet: async (entity, key, value, meta) => {
      await entity.write('closuresDoorLock', { enablePrivacyModeButton: value }, utils.getOptions(meta.mapped, entity));
      return { state: { [key]: value } };
    },
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['enablePrivacyModeButton']);
    },
  },
};

module.exports = [
  extendDevice('YRD226 TSDB', {
    fromZigbee: [fzLocal.inside_status_led],
    toZigbee: [tzLocal.inside_status_led],
    exposes: [
      exposes.binary('inside_status_led', ea.ALL, true, false).withDescription('Enable/disable inside status LED'),
      exposes.binary('one_touch_locking', ea.ALL, true, false).withDescription('Enable/disable one-touch locking'),
      exposes.binary('privacy_mode_button', ea.ALL, true, false).withDescription('Enable/disable privacy mode button'),
    ],
  }),
];
