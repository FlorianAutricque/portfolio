import styles1 from "./Box.module.css";

function Box({ children, icon, size1, size2 }) {
  return (
    <div className={`${styles1.boxFunFact} ${size1}`}>
      <div className={`${styles1.boxOutside} ${size2}`}>
        {icon}
        {children}
      </div>
    </div>
  );
}

export default Box;
