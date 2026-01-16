import TuyaOAuth2DeviceSocket from '../../drivers/socket/device';
import { executeMigration } from './MigrationStore';

export async function performMigrations(device: TuyaOAuth2DeviceSocket): Promise<void> {
  await energyScalingSettingMigration(device).catch(device.error);
}

async function energyScalingSettingMigration(device: TuyaOAuth2DeviceSocket): Promise<void> {
  await executeMigration(device, 'socket_energy_scaling', async () => {
    device.log('Migrating energy scaling setting...');

    const deviceSpecs =
      (await device.oAuth2Client
        .getSpecification(device.data.deviceId)
        .catch(e => device.log('Device specification retrieval failed', e))) ?? undefined;

    let scale;

    if (deviceSpecs?.status !== undefined) {
      for (const statusSpecification of deviceSpecs.status) {
        const tuyaCapability = statusSpecification.code;
        const values: Record<string, number> = JSON.parse(statusSpecification.values);
        if (tuyaCapability === 'add_ele') {
          if ([0, 1, 2, 3].includes(values.scale)) {
            scale = `${values.scale}`;
          } else {
            device.error('Unsupported energy scale:', values.scale);
          }
        }
      }
    }

    if (scale) {
      await device.safeSetSettingValue('meter_power_scaling', scale);
      device.log('Energy scaling set:', scale);
    } else {
      device.log('Energy scaling left at default');
    }
  });
}
