import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./CarouselComponent.module.css";

function CarouselComponent() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  const { t } = useTranslation();

  return (
    <>
      {project
        ? project.allImages && (
            <div className={styles.carousel}>
              <p className={styles.projectPhotoText}>{t("Carousel")}</p>
              <Carousel showArrows={true} useKeyboardArrows={true}>
                {project.allImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${project.name} ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          )
        : ""}
    </>
  );
}

export default CarouselComponent;
