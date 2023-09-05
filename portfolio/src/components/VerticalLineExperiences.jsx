import { useEffect, useState } from "react";
import styles from "./VerticalLineExperiences.module.css";

function VerticalLineExperiences() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollHeight(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={styles.horizontal}
      style={{ height: `${scrollHeight + 200}px` }}
    ></div>
  );
}

export default VerticalLineExperiences;
