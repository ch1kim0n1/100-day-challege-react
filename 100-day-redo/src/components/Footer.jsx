import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const bodyHeight = document.body.offsetHeight;

      setIsAtBottom(windowHeight + scrollPosition >= bodyHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={{ display: isAtBottom ? 'block' : 'none' }}>
      <p>&copy; Jun 2024 - 100 Day Challenge v2.0</p>
    </footer>
  );
}

export default Footer;
