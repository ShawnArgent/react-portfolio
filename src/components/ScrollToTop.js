import React, { useEffect, useState } from 'react';
import AiOutlineArrowUp from 'react-icons/ai';
import ScrollToTop from "react-scroll-to-top";
import './ScrollToTop.css';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => (window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false));

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
