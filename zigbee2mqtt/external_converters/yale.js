const { extendDevice } = require('./utils');
const {
  constants,
  ea,
  exposes,
  reporting,
  utils,
} = require('./zhc');

const fzLocal = {
  actuator_enabled: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('actuatorEnabled')) {
        return { actuator_enabled: !!msg.data.actuatorEnabled };
      }

      return {};
    },
  },

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

  operating_mode: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('operatingMode')) {
        return { operating_mode: msg.data.operatingMode };
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

  wrong_code_entry_limit: {
    cluster: 'closuresDoorLock',
    type: ['attributeReport', 'readResponse'],
    convert: (model, msg, publish, options, meta) => {
      if (msg.data.hasOwnProperty('wrongCodeEntryLimit')) {
        return { wrong_code_entry_limit: msg.data.wrongCodeEntryLimit };
      }

      return {};
    },
  },
};

const tzLocal = {
  actuator_enabled: {
    key: ['actuator_enabled'],
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['actuatorEnabled']);
    },
  },

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

  operatingMode: {
    key: ['operating_mode'],
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['operatingMode']);
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

  wrong_code_entry_limit: {
    key: ['wrong_code_entry_limit'],
    convertSet: async (entity, key, value, meta) => {
      await entity.write('closuresDoorLock', { wrongCodeEntryLimit: value }, utils.getOptions(meta.mapped, entity));
      return { state: { [key]: value } };
    },
    convertGet: async (entity, key, meta) => {
      await entity.read('closuresDoorLock', ['wrongCodeEntryLimit']);
    },
  },
};

const exposesLocal = {
  actuator_enabled: exposes.binary('actuator_enabled', ea.STATE_GET, true, false).withDescription('Whether the actuator is enabled'),
  inside_status_led: exposes.binary('inside_status_led', ea.ALL, true, false).withDescription('Enable/disable inside status LED'),
  language: exposes.enum('language', ea.ALL, ['en', 'es', 'fr']).withDescription('Device language'),
  one_touch_locking: exposes.binary('one_touch_locking', ea.ALL, true, false).withDescription('Enable/disable one-touch locking'),
  operating_mode: exposes.numeric('operating_mode', ea.STATE_GET).withDescription('Operating mode'),
  privacy_mode_button: exposes.binary('privacy_mode_button', ea.ALL, true, false).withDescription('Enable/disable privacy mode button'),
  wrong_code_entry_limit: exposes.numeric('wrong_code_entry_limit', ea.ALL).withValueMin(0).withValueMax(255).withDescription('Wrong code entry limit'),
};

module.exports = [
  extendDevice('YRD226 TSDB', {
    fromZigbee: Object.values(fzLocal),
    toZigbee: Object.values(tzLocal),
    exposes: Object.values(exposesLocal),
    configure: async (device, coordinatorEndpoint, logger) => {
      const endpoint = device.getEndpoint(1);

      const payload = reporting.payload('actuatorEnabled', constants.repInterval.HOUR, constants.repInterval.MAX, 0);
      await endpoint.configureReporting('closuresDoorLock', payload);
    },
  }),
];
