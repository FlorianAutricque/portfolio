import Box from "./Box";
import styles from "../pages/Languages.module.css";
import styles2 from "./SizeBox.module.css";

function LanguagesBox({ children, icon }) {
  return (
    <Box
      size1={styles2.small}
      size2={styles2.smallMedium}
      className={styles.item}
      icon={icon}
    >
      <span className={styles.text}>{children}</span>
    </Box>
  );
}

export default LanguagesBox;
