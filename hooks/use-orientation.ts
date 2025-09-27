import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    updateOrientation();
    
    const subscription = Dimensions.addEventListener('change', updateOrientation);
    
    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
}