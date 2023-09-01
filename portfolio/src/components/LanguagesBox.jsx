import Box from "./Box";
import styles from "../pages/Languages.module.css";
import styles2 from "./SizeBox.module.css";

function LanguagesBox({ children, icon }) {
  return (
    <Box
      size1={styles2.small}
      size2={styles2.smallMedium}
      className={styles.language}
      icon={icon}
    >
      {children}
    </Box>
  );
}

export default LanguagesBox;
