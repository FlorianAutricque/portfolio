import styles from "./FunFactInfos.module.css";

function FunFactInfos({ children, icon, title }) {
  return (
    <div className={styles.boxFunFact}>
      <div className={styles.boxOutside}>
        {icon}
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default FunFactInfos;
