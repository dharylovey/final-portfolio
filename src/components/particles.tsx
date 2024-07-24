'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Particles from '@/components/magicui/particles';

export const Particle = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return (
    <div>
      <Particles className="absolute inset-0" quantity={100} ease={90} color={color} refresh />
    </div>
  );
};
