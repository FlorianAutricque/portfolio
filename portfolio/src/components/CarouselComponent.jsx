import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./CarouselComponent.module.css";
import { useEffect } from "react";

function CarouselComponent() {
  const { t } = useTranslation();
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  useEffect(() => {
    const elementToObserver = [document.querySelector(`.${styles.carousel}`)];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallBack = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }, index * 200);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallBack, options);

    elementToObserver.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
