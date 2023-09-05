import Scroll from "../components/Scroll";
import { BiSolidLocationPlus } from "react-icons/bi";
import styles from "./AllExperiences.module.css";

function AllExperiences() {
  return (
    <>
      <Scroll position={styles.first}>
        <h3>React Course 2023: React, Redux, Tailwind CSS & More</h3>
        <h5>August 2023</h5>
        <p>
          <em>Udemy</em>
        </p>
        React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
        CSS Modules, Styled Components, Context API, React Router.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Javascript course</h3>
          <h5>July 2023</h5>
          <p>
            <em>Udemy</em>
          </p>
          Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
          modules.
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Fullstack web development, computer programming</h3>
        <h5>April 2023-June2023</h5>
        <p>
          <em>Le Wagon Montreal</em>
        </p>
        9 weeks intensive coding bootcamp learning HTML, CSS, Bootstrap,
        JavaScript, Figma, Trello, SQL, git, GitHub, Heroku and Ruby on Rails.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Personal goal pursuit | Career break</h3>
          <h5>October 2022-April 2023</h5>
          <p>
            <em>France</em>
          </p>
          Pursuing personal goal of investment opportunities through CTO, PEA,
          LI. Additionally, I invested into real estate by implementing a buy,
          renovation, and re-sell strategy.
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Leading Hand/Supervisor</h3>
        <h5>March 2021-October 2022</h5>
        <p>
          <em>Stralis Energy</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Gunnedah and Woolooga solar plant (Australia)
        </span>
        <br /> <br />
        Led teams of 15 in Gunnedah and 30 in Woolooga. <br />
        Managed operations, quality, organization, and safety.
        <br />
        Enhanced production efficiency for better performance.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Team Leader</h3>
          <h5>July 2020-February 2021</h5>
          <p>
            <em>All Energy Contracting</em>
          </p>
          <span>
            <BiSolidLocationPlus /> Glenrowan solar plant (Australia)
          </span>{" "}
          <br /> <br />
          Assisted supervisors with a 15-member underground electric cable team,
          prioritizing team organization. <br /> Ensured quality control for
          combiner boxes and power conditioning units (PCUs).
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Leading Hand</h3>
        <h5>October 2019-February 2020</h5>
        <p>
          <em>Protech Group</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Limondale solar plant (Australia)
        </span>{" "}
        <br /> <br /> Managed a 15-member team, improving task organization and
        performance.
        <br />
        Ensured high-quality component construction.
        <br />
        Implemented workplace safety measures.
        <br />
        Conducted field assessments to verify module quality standards.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Leading Hand</h3>
          <h5>December 2018-October2019</h5>
          <p>
            <em>Bamford Engineering & Consulting</em>
          </p>
          <span>
            <BiSolidLocationPlus /> Limondale solar plant (Australia)
          </span>{" "}
          <br /> <br /> Led 30-person workshop team.
          <br />
          Ensured rigorous quality control for production standards.
          <br />
          Strived to boost production efficiency and output.
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Laborer</h3>
        <h5>October 2018-December 2018</h5>
        <p>
          <em>Bamford Engineering & Consulting</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Limondale solar plant (Australia)
        </span>{" "}
        <br /> <br />- Assembling components in the workshop area.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Master's degree</h3>
          <h5>September 2016-September 2018</h5>
          <p>
            <em>Le Mans University</em>
          </p>
          <span>Master Territorial Sustainable Development Policies.</span>
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Retail worker | Student job</h3>
        <h5>November 2016-August 2018</h5>
        <p>
          <em>XPO Logistics</em>
        </p>
        Collaborated with colleagues for efficient store operations and customer
        satisfaction. <br />
        Prepared accurate customer orders with attention to detail. <br />
        Prioritized safety by following guidelines.
      </Scroll>

      <div className={styles.x}>
        <Scroll position={styles.right}>
          <h3>Bachelor's degree</h3>
          <h5>September 2012-July 2016</h5>
          <p>
            <em>University Bordeaux Montaigne</em>
          </p>
          <span>Bachelor's degree, Territory development and environment.</span>
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>Retail worker | Student job</h3>
        <h5>January 2014-September 2016</h5>
        <p>
          <em>Carrefour</em>
        </p>
        Problem-solving.
        <br />
        Collaborating for store operations.
        <br />
        Customer interactions, security, and safety.
        <br />
        Organizing products attractively.
        <br />
        Managing inventory and restocking notifications.
      </Scroll>
    </>
  );
}

export default AllExperiences;
