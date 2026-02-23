import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    } 
    // If there is a hash, try to scroll to it
    else {
      // We need a slight delay to ensure the page has rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay is usually sufficient
    }
  }, [pathname, hash, key]); // Run effect when route or hash changes

  return null;
};

export default ScrollToAnchor;