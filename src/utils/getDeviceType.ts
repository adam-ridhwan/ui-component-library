export interface Resolution {
  width: number;
  height: number;
}

export enum DeviceType {
  PHONE = 'Phone',
  IPAD = 'iPad',
  DESKTOP = 'Desktop',
}

export const getDeviceType = (resolution: Resolution): DeviceType => {
  const { width } = resolution;

  if (width <= 640) {
    return DeviceType.PHONE;
  } else if (width <= 768) {
    return DeviceType.IPAD;
  } else {
    return DeviceType.DESKTOP;
  }
};
