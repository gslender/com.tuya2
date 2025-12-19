import TuyaDeviceWithCamera from '../../lib/camera/device';

export class TuyaOAuth2DeviceCamera extends TuyaDeviceWithCamera {
  DOORBELL_TRIGGER_FLOW = 'camera_doorbell_rang';
}

module.exports = TuyaOAuth2DeviceCamera;
