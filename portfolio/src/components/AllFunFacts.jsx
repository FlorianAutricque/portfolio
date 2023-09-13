import { GiPencilBrush } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";

import Box from "./Box";

import styles from "./SizeBox.module.css";
import styles2 from "./AllFunFacts.module.css";
import { useTranslation } from "react-i18next";

function AllFunFacts() {
  const { t } = useTranslation();
  return (
    <div className={styles2.containerFF}>
      <Box
        icon={<GiPencilBrush size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Art</h3>
        <p className={styles2.text}>{t("funfacts.1")}</p>
      </Box>

      <Box
        icon={<FaPeopleGroup size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Management</h3>
        <p className={styles2.text}>{t("funfacts.2")}</p>
      </Box>

      <Box
        icon={<FaSkiing size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Sport</h3>
        <p className={styles2.text}>{t("funfacts.3")}</p>
      </Box>
    </div>
  );
}

export default AllFunFacts;
