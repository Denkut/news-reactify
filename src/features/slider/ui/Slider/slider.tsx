import React, { useRef } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean;
}

const Slider = ({ children, step = 150, isDark }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - step,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + step,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
    <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
    {React.cloneElement(children, { ref: sliderRef })}
    <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
  </div>
  );
};
export default Slider;
