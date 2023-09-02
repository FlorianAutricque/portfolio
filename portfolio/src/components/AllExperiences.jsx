import Scroll from "../components/Scroll";
import { BiSolidLocationPlus } from "react-icons/bi";
import styles from "./AllExperiences.module.css";

function AllExperiences() {
  return (
    <>
      <Scroll position={styles.left}>
        <h3>React Course 2023: React, Redux, Tailwind CSS & More</h3>
        <h5>August 2023</h5>
        <p>
          <em>Udemy</em>
        </p>
        React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
        CSS Modules, Styled Components, Context API, React Router
      </Scroll>

      <Scroll position={styles.right}>
        <h3>Javascript course</h3>
        <h5>July 2023</h5>
        <p>
          <em>Udemy</em>
        </p>
        Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6 modules.
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Fullstack web development, computer programming</h3>
        <h5>April 2023-June2023</h5>
        <p>
          <em>Le Wagon Montreal</em>
        </p>
        9 weeks intensive coding bootcamp learning HTML, CSS,Bootstrap,
        JavaScript, Figma, SQL, git, GitHub, Heroku andRuby on Rails, Trello.
      </Scroll>

      <Scroll position={styles.right}>
        <h3>Personal goal pursuit | Career break</h3>
        <h5>October 2022-April 2023</h5>
        <p>
          <em>France</em>
        </p>
        Pursuing personal goal of investment opportunities through CTO, PEA, LI.
        Additionally, I invested into real estate by implementing a buy,
        renovation, and re-sell strategy.
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Leading Hand/Supervisor</h3>
        <h5>March 2021-October 2022</h5>
        <p>
          <em>Stralis Energy</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Gunnedah solar plant and Woolooga solar plant
          (Australia)
        </span>
        <br /> <br />- Management of 15 people in Gunnedah and 30 in Woolooga.
        <br /> -Responsible of overseeing operations, quality checks, team
        organization, and prioritizing everyone's safety. <br />- Enhancing
        production efficiency to optimize overall performance.
      </Scroll>

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
        - Providing support to supervisors in overseeing a team of 15
        individuals involved in underground electric cable work, with a focus on
        optimizing team organization. <br />- Ensuring quality assurance and
        quality control of combiner boxes and power conditioning units
        (PCUs).performance.
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Leading Hand</h3>
        <h5>October 2019-February 2020</h5>
        <p>
          <em>Protech Group</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Limondale solar plant (Australia)
        </span>{" "}
        <br /> <br />- Managing a team of 15 individuals. Organizing their tasks
        and increasing their performances.
        <br /> - Quality control of the components constructed, focusing on
        maintaining high standards. <br />- Organizing and implementing safety
        measures in the workplace.
        <br /> - Conducting quality assurance and quality control assessments of
        modules deployed in the field, verifying their adherence to specified
        standards.
      </Scroll>

      <Scroll position={styles.right}>
        <h3>Leading Hand</h3>
        <h5>December 2018-October2019</h5>
        <p>
          <em>Bamford Engineering & Consulting</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Limondale solar plant (Australia)
        </span>{" "}
        <br /> <br />- Leading hand of the workshop area. Managing a team of 30
        people. <br />- Conducting thorough quality checks and implementing
        stringent quality control measures to uphold the standards of
        production. <br />- Actively seeking ways to enhance production
        efficiency and optimize output levels.
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Laborer</h3>
        <h5>October 2018-December 2018</h5>
        <p>
          <em>Bamford Engineering & Consulting</em>
        </p>
        <span>
          <BiSolidLocationPlus /> Limondale solar plant (Australia)
        </span>{" "}
        <br /> <br />- Assembling components in the workshop are
      </Scroll>

      <Scroll position={styles.right}>
        <h3>Master's degree</h3>
        <h5>September 2016-September 2018</h5>
        <p>
          <em>Le Mans University</em>
        </p>
        <span>Master Territorial Sustainable Development Policies</span>
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Retail worker | Student job</h3>
        <h5>November 2016-August 2018</h5>
        <p>
          <em>XPO Logistics</em>
        </p>
        <br />
        - Teamwork with colleagues to ensure efficient store operations and a
        positive customer experience. <br />- Preparing customer orders with
        attention to detail and accuracy. <br />- Commitment to safety by
        strictly adhering to established safety rules and guidelines.
      </Scroll>

      <Scroll position={styles.right}>
        <h3>Bachelor's degree</h3>
        <h5>September 2012-July 2016</h5>
        <p>
          <em>University Bordeaux Montaigne</em>
        </p>
        <span>Bachelor's degree, Territory development and environment</span>
      </Scroll>

      <Scroll position={styles.left}>
        <h3>Retail worker | Student job</h3>
        <h5>January 2014-September 2016</h5>
        <p>
          <em>Carrefour</em>
        </p>
        <br />
        - Problem solving <br />- Collaborating with colleagues to ensure smooth
        store operations. <br />- Customer interactions, store security, and
        safety protocols. <br />
        - Arranging products in an organized and visually appealing manner.
        <br /> - Inventories, conducting stock checks, and notifying management
        when products need to be restocked.
      </Scroll>
    </>
  );
}

export default AllExperiences;
