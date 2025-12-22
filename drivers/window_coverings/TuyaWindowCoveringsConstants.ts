export const WINDOW_COVERINGS_CAPABILITY_MAPPING = {
  control: 'windowcoverings_state',
  mach_operate: 'windowcoverings_state',
  position: 'windowcoverings_set',
  percent_control: 'windowcoverings_set',
  percent_state: 'windowcoverings_set',
} as const;

export const WINDOW_COVERINGS_CAPABILITIES = {
  read_write: ['control', 'position', 'mach_operate', 'percent_control'],
  setting: ['opposite', 'control_back'],
} as const;

export type HomeyWindowCoveringsSettings = {
  inverse: boolean;
};

export type TuyaWindowCoveringsSettings = {
  opposite: boolean; // inverse
  control_back: boolean; // inverse
  control_back_mode: 'forward' | 'back'; // inverse
};
