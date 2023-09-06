import { GiPencilBrush } from "react-icons/gi";
import Box from "./Box";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";
import styles from "./SizeBox.module.css";
import styles2 from "./AllFunFacts.module.css";

function AllFunFacts() {
  return (
    <div className={styles2.containerFF}>
      <Box
        icon={<GiPencilBrush size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Art</h3>
        <p className={styles2.text}>
          As an art enthusiast, drawing is, to me, an expression of my
          creativity. I like to think of coding the same way as drawing, just
          substituting a pen with letters and numbers.
        </p>
      </Box>

      <Box
        icon={<FaPeopleGroup size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Management</h3>
        <p className={styles2.text}>
          I've supervised 150+ individuals on Australian solar plant projects,
          highlighting the importance of teamwork to me.
        </p>
      </Box>

      <Box
        icon={<FaSkiing size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
        reveal={styles2.reveal}
      >
        <h3>Sport</h3>
        <p className={styles2.text}>
          Sports hold a special place in my heart, with skiing being a true
          passion. During my younger years, I even competed as a
          semi-professional skier.
        </p>
      </Box>
    </div>
  );
}

export default AllFunFacts;
