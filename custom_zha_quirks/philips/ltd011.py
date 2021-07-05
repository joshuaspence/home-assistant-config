"""This won't be needed after zigpy/zha-device-handlers#919."""

from zigpy.profiles import zha
from zigpy.quirks import CustomDevice
from zigpy.zcl.clusters.general import (
    Basic,
    GreenPowerProxy,
    Groups,
    Identify,
    LevelControl,
    OnOff,
    Ota,
    Scenes,
)
from zigpy.zcl.clusters.lighting import Color
from zigpy.zcl.clusters.lightlink import LightLink

from zhaquirks.const import (
    DEVICE_TYPE,
    ENDPOINTS,
    INPUT_CLUSTERS,
    MODELS_INFO,
    OUTPUT_CLUSTERS,
    PROFILE_ID,
)
from zhaquirks.philips import (
    PHILIPS,
    SIGNIFY,
    PhilipsLevelControlCluster,
    PhilipsOnOffCluster,
)


class PhilipsLTD011(CustomDevice):
    """Philips LTD011 device."""

    signature = {
        MODELS_INFO: [
            (PHILIPS, "LTD011"),
            (SIGNIFY, "LTD011"),
        ],
        ENDPOINTS: {
            11: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COLOR_TEMPERATURE_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Identify.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    OnOff.cluster_id,
                    LevelControl.cluster_id,
                    LightLink.cluster_id,
                    64514,
                    Color.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Ota.cluster_id],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        },
    }

    replacement = {
        ENDPOINTS: {
            11: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COLOR_TEMPERATURE_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Identify.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    PhilipsOnOffCluster,
                    PhilipsLevelControlCluster,
                    LightLink.cluster_id,
                    64514,
                    Color.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Ota.cluster_id],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        }
    }
