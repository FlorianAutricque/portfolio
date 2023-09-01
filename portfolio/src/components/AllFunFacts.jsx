import { GiPencilBrush } from "react-icons/gi";
import Box from "./Box";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";
import styles from "./SizeBox.module.css";

function AllFunFacts() {
  return (
    <>
      <Box
        icon={<GiPencilBrush size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
      >
        <h3>Art</h3>
        As an art enthusiast, drawing is, to me, an expression of my creativity.
        I like to think of coding the same way as drawing, just substituting a
        pen with letters and numbers.
      </Box>

      <Box
        icon={<FaPeopleGroup size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
      >
        <h3>Management</h3>
        I've supervised 150+ individuals on Australian solar plant projects,
        highlighting the importance of teamwork to me.
      </Box>

      <Box
        icon={<FaSkiing size={70} />}
        size1={styles.large}
        size2={styles.mediumLarge}
      >
        <h3>Sport</h3>
        Sports hold a special place in my heart, with skiing being a true
        passion. During my younger years, I even competed as a semi-professional
        skier.
      </Box>
    </>
  );
}

export default AllFunFacts;
