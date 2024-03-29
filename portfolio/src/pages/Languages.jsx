import { useTranslation } from "react-i18next";

import PageNav from "../components/PageNav";
import LanguagesBox from "../components/LanguagesBox";
import ButtonScrollTop from "../components/ButtonScrollTop.jsx";

import styles from "./Languages.module.css";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoMongodb,
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
  SiStimulus,
} from "react-icons/si";
import { PiFileJsxDuotone } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";

function Languages() {
  const { t } = useTranslation();

  return (
    <>
      <PageNav />

      <h1>{t("LanguagesTitle")}</h1>

      <div className={styles.container}>
        <div className={styles.containerSmall}>
          <div>
            <p>&gt; {t("languages.lang").toUpperCase()} </p>
          </div>

          <div className={styles.organisationContainer}>
            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BiLogoJavascript size={80} />}>
                Javascript
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<AiFillHtml5 size={80} />}>HTML</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BiLogoCss3 size={80} />}>CSS</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<DiSass size={80} />}>Sass</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<DiRuby size={80} />}>Ruby</LanguagesBox>
            </div>
          </div>
        </div>

        <div className={styles.containerSmall}>
          <div>
            <p>&gt; {t("languages.framework").toUpperCase()} </p>
          </div>

          <div className={styles.organisationContainer}>
            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<TbBrandNextjs size={80} />}>
                NextJS
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiTailwindcss size={80} />}>
                Tailwindcss
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<FaBootstrap size={80} />}>
                Bootstrap
              </LanguagesBox>
            </div>
            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiStimulus size={80} />}>
                Stimulus
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiRubyonrails size={80} />}>
                Rails
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiVuedotjs size={80} />}>Vue</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiNuxtdotjs size={80} />}>Nuxt</LanguagesBox>
            </div>
          </div>
        </div>

        <div className={styles.containerSmall}>
          <div>
            <p>&gt; {t("languages.libraries").toUpperCase()}</p>
          </div>

          <div className={styles.organisationContainer}>
            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<FaReact size={80} />}>React</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiStyledcomponents size={80} />}>
                Styled Comp.
              </LanguagesBox>
            </div>
          </div>
        </div>

        <div className={styles.containerSmall}>
          <div>
            <p>&gt; {t("languages.others").toUpperCase()}</p>
          </div>

          <div className={styles.organisationContainer}>
            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiVite size={80} />}>Vite</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<PiFileJsxDuotone size={80} />}>
                JSX
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiMysql size={80} />}>MySQL</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BiLogoPostgresql size={80} />}>
                SQL
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiSqlite size={80} />}>SQLite</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BiLogoFigma size={80} />}>
                Figma
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BsGit size={80} />}>Git</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<DiHeroku size={80} />}>Heroku</LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<BiLogoMongodb size={80} />}>
                MongoDB
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<SiWebpack size={80} />}>
                Webpack
              </LanguagesBox>
            </div>

            <div className={styles.containerEachBox}>
              <LanguagesBox icon={<RiSupabaseFill size={80} />}>
                Supabase
              </LanguagesBox>
            </div>
          </div>
        </div>

        <ButtonScrollTop />
      </div>
    </>
  );
}

export default Languages;
