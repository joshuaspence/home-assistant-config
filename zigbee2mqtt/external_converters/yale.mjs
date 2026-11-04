import {definitions} from "zigbee-herdsman-converters/devices/yale";
import * as m from "zigbee-herdsman-converters/lib/modernExtend";

const base = definitions.find((definition) => definition.zigbeeModel?.includes("YRD226 TSDB"));
const cluster = "closuresDoorLock";
const boolean = {valueOn: [true, 1], valueOff: [false, 0]};

export default {
    ...base,
    extend: [
        ...base.extend,
        m.binary({
            name: "actuator_enabled",
            cluster,
            attribute: "actuatorEnabled",
            ...boolean,
            access: "STATE_GET",
            reporting: {min: "1_HOUR", max: "MAX", change: 0},
            description: "Whether the actuator is enabled",
        }),
        m.binary({
            name: "inside_status_led",
            cluster,
            attribute: "enableInsideStatusLed",
            ...boolean,
            reporting: false,
            description: "Enable/disable inside status LED",
        }),
        m.enumLookup({
            name: "language",
            cluster,
            attribute: "language",
            lookup: {en: "en", es: "es", fr: "fr"},
            reporting: false,
            description: "Device language",
        }),
        m.binary({
            name: "one_touch_locking",
            cluster,
            attribute: "enableOneTouchLocking",
            ...boolean,
            reporting: false,
            description: "Enable/disable one-touch locking",
        }),
        m.numeric({
            name: "operating_mode",
            cluster,
            attribute: "operatingMode",
            access: "STATE_GET",
            reporting: false,
            description: "Operating mode",
        }),
        m.binary({
            name: "privacy_mode_button",
            cluster,
            attribute: "enablePrivacyModeButton",
            ...boolean,
            reporting: false,
            description: "Enable/disable privacy mode button",
        }),
        m.numeric({
            name: "wrong_code_entry_limit",
            cluster,
            attribute: "wrongCodeEntryLimit",
            valueMin: 0,
            valueMax: 255,
            reporting: false,
            description: "Wrong code entry limit",
        }),
    ],
};
