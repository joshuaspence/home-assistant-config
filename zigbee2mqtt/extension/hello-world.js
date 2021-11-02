class HelloWorldExtension {
  constructor(zigbee, mqtt, state, publishEntityState, eventBus, settings, logger) {
    this.zigbee = zigbee;
    this.mqtt = mqtt;
    this.state = state;
    this.publishEntityState = publishEntityState;
    this.eventBus = eventBus;
    this.settings = settings;
    this.logger = logger;

    logger.info('Loaded HelloWorldExtension');
  }

  start() {
    this.mqtt.publish('example/extension', 'Hello World');

    // All possible events can be seen here: https://github.com/Koenkk/zigbee2mqtt/blob/dev/lib/eventBus.ts

    this.eventBus.onMQTTMessage(this, (data) => {
      console.log(`Received MQTT message on topic '${data.topic}' with message '${data.message}'`);
    });
  }

  stop() {
    this.eventBus.removeListenersExtension(this);
  }
}

module.exports = HelloWorldExtension;
