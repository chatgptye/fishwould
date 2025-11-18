import { useEffect, useState } from 'react';
import { APP_LOGO } from '@/const';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <img src={APP_LOGO} alt="عالم السمك" className="loading-logo" />
    </div>
  );
}
