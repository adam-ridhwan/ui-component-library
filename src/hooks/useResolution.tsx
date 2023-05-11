import { useEffect, useState } from 'react';

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

const useResolution = (): [Resolution, DeviceType] => {
  const [resolution, setResolution] = useState<Resolution>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setResolution({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const deviceType: DeviceType = getDeviceType(resolution);

  return [resolution, deviceType];
};

export default useResolution;
