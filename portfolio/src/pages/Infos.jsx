import { useTranslation } from "react-i18next";

import { CiLocationOn } from "react-icons/ci";

import PageNav from "../components/PageNav";
import styles from "./Infos.module.css";
import ButtonInfos from "../components/ButtonInfos";
import AllFunFacts from "../components/AllFunFacts";

function Infos() {
  const { t } = useTranslation();

  return (
    <>
      <PageNav />
      <h1>Informations</h1>

      <div className={styles.container}>
        <div>
          <img src="/idimageWebp.webp" alt="Flo" className={styles.img} />
          <ButtonInfos />
        </div>

        <p>
          <CiLocationOn /> <u>{t("locationInfos")}</u> Montreal, Canada
          <br />
          <br />
          {t("textInfos.1")}
          <br /> <br />
          {t("textInfos.2")}
        </p>
      </div>
      <div className={styles.containerFunFact}>
        <AllFunFacts />
      </div>
    </>
  );
}

export default Infos;
