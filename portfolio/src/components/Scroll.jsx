import React, { useRef, useEffect, useState } from "react";
import styles from "./Scroll.module.css";

function ScrollTriggeredText({ children, position }) {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50px",
      threshold: 0.5,
    };

    let targetNode = textRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(targetNode);
        }
      });
    }, options);

    if (targetNode) {
      observer.observe(targetNode);
    }

    return () => {
      if (targetNode) {
        observer.unobserve(targetNode);
      }
    };
  }, []);

  return (
    <div className={`${styles.scrollTrigerText} ${position}`}>
      <span
        ref={textRef}
        className={isVisible ? styles.visible : styles.hidden}
      >
        {children}
      </span>
    </div>
  );
}

export default ScrollTriggeredText;
