import { useEffect, useState } from 'react';

export interface Resolution {
  width: number;
  height: number;
}

export enum DeviceType {
  PHONE = 'Phone',
  TABLET = 'Tablet',
  DESKTOP = 'Desktop',
  LARGE_DESKTOP = 'Large Desktop',
}

export const getDeviceType = (resolution: Resolution): DeviceType => {
  const { width } = resolution;

  if (width <= 640) {
    return DeviceType.PHONE;
  } else if (width <= 767) {
    return DeviceType.TABLET;
  } else if (width <= 1280) {
    return DeviceType.DESKTOP;
  } else {
    return DeviceType.LARGE_DESKTOP;
  }
};
const useResolution = (): [DeviceType] => {
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

  return [deviceType];
};

export default useResolution;
