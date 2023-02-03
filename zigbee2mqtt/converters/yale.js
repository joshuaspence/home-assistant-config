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

  language: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('language')) {
        return { language: msg.data.language };
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
        return { privacy_mode_button: !!msg.data.enablePrivacyModeButton };
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

  language: {
    key: ['language'],
    convertSet: async (entity, key, value, meta) => {
      utils.validateValue(value, ['en', 'es', 'fr']);
      await entity.write('closuresDoorLock', { language: value }, utils.getOptions(meta.mapped, entity));
      return { state: { [key]: value } };
    },
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['language']);
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
    fromZigbee: Object.values(fzLocal),
    toZigbee: Object.values(tzLocal),
    exposes: [
      exposes.binary('inside_status_led', ea.ALL, true, false).withDescription('Enable/disable inside status LED'),
      exposes.enum('language', ea.ALL, ['en', 'es', 'fr']).withDescription('Device language'),
      exposes.binary('one_touch_locking', ea.ALL, true, false).withDescription('Enable/disable one-touch locking'),
      exposes.binary('privacy_mode_button', ea.ALL, true, false).withDescription('Enable/disable privacy mode button'),
    ],
  }),
];
