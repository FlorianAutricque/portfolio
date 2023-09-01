import PageNav from "../components/PageNav";
import LanguagesBox from "../components/LanguagesBox";
import styles from "./Languages.module.css";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiHeroku, DiRuby, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiMysql,
  SiRubyonrails,
  SiSqlite,
  SiWebpack,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

function Languages() {
  return (
    <>
      <PageNav />
      <h1>Languages and Tools</h1>

      <div className={styles.container}>
        <LanguagesBox icon={<FaReact size={80} />} className={styles.item}>
          React
        </LanguagesBox>
        <LanguagesBox
          icon={<BiLogoJavascript size={80} />}
          className={styles.item}
        >
          Javascript
        </LanguagesBox>{" "}
        <LanguagesBox
          icon={<SiRubyonrails size={80} />}
          className={styles.item}
        >
          Rails
        </LanguagesBox>{" "}
        <LanguagesBox icon={<DiRuby size={80} />} className={styles.item}>
          Ruby
        </LanguagesBox>
        <LanguagesBox icon={<FaBootstrap size={80} />} className={styles.item}>
          Bootstrap
        </LanguagesBox>{" "}
        <LanguagesBox icon={<AiFillHtml5 size={80} />} className={styles.item}>
          HTML
        </LanguagesBox>{" "}
        <LanguagesBox icon={<BiLogoCss3 size={80} />} className={styles.item}>
          CSS
        </LanguagesBox>{" "}
        <LanguagesBox icon={<DiSass size={80} />} className={styles.item}>
          Sass
        </LanguagesBox>
        <LanguagesBox
          icon={<SiTailwindcss size={80} />}
          className={styles.item}
        >
          Tailwindcss
        </LanguagesBox>
        <LanguagesBox
          icon={<SiStyledcomponents size={80} />}
          className={styles.item}
        >
          Styled Comp.
        </LanguagesBox>
        <LanguagesBox icon={<SiMysql size={80} />} className={styles.item}>
          MySQL
        </LanguagesBox>{" "}
        <LanguagesBox
          icon={<BiLogoPostgresql size={80} />}
          className={styles.item}
        >
          SQL
        </LanguagesBox>{" "}
        <LanguagesBox icon={<SiSqlite size={80} />} className={styles.item}>
          SQLite
        </LanguagesBox>
        <LanguagesBox icon={<BiLogoFigma size={80} />} className={styles.item}>
          Figma
        </LanguagesBox>{" "}
        <LanguagesBox icon={<BsGit size={80} />} className={styles.item}>
          Git
        </LanguagesBox>{" "}
        <LanguagesBox icon={<DiHeroku size={80} />} className={styles.item}>
          Heroku
        </LanguagesBox>{" "}
        <LanguagesBox icon={<SiWebpack size={80} />} className={styles.item}>
          Webpack
        </LanguagesBox>
        <LanguagesBox
          icon={<RiSupabaseFill size={80} />}
          className={styles.item}
        >
          Supabase
        </LanguagesBox>
      </div>
    </>
  );
}

export default Languages;
