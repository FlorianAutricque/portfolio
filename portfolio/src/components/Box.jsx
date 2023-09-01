import styles1 from "./Box.module.css";

function Box({ children, icon, title, size1, size2 }) {
  return (
    <div className={`${styles1.boxFunFact} ${size1}`}>
      <div className={`${styles1.boxOutside} ${size2}`}>
        {icon}
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Box;
