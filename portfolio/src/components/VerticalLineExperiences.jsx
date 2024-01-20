import { useEffect, useState } from "react";
import styles from "./VerticalLineExperiences.module.css";

function VerticalLineExperiences() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [x, setX] = useState(window.innerWidth > 550 ? 333 : 580);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollHeight(scrollTop);
    };

    const handleResize = () => {
      setX(window.innerWidth > 550 ? 333 : 400);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={styles.horizontal}
      style={{ height: `${scrollHeight + x}px` }}
    ></div>
  );
}

export default VerticalLineExperiences;
