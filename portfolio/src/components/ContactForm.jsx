import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import { toast } from "react-hot-toast";

import { useEffect } from "react";

import styles from "./ContactForm.module.css";

function ContactForm({ darkMode }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const onSubmit = async data => {
    const { name, email, phone, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        phone,
        subject,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        templateParams,

        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      );

      toast.success(t("CONTACT_FORM.SUCCESS.MESSAGE_1"));
    } catch (e) {
      console.error(e);

      toast.error(t("CONTACT_FORM.ALERT.MESSAGE_1"));
    } finally {
      setDisabled(false);

      reset();
    }
  };

  useEffect(() => {
    const element2 = document.querySelector(
      `.${styles.mainContainerContactForm}`
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer2 = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element2.classList.add(styles.show);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer2.observe(element2);
  }, []);

  return (
    <div className={`${styles.mainContainer} `}>
      <div>
        <div>
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={styles.mainContainerContactForm}
          >
            <div className={styles.textContactFormAbove}>
              {t("CONTACT_FORM.NAME")}{" "}
              <span className={styles.redAstrisk}>*</span> :
            </div>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: t("CONTACT_FORM.ERROR_NAME"),
                },
                maxLength: {
                  value: 30,
                  message: t("CONTACT_FORM.ERROR_LENGTH"),
                },
              })}
              placeholder={t("CONTACT_FORM.NAME_PLACEHOLDER")}
            />
            {errors.name && (
              <span className={styles.errorMessage}>{errors.name.message}</span>
            )}

            <div className={styles.textContactFormAbove}>
              {t("CONTACT_FORM.EMAIL")}
              <span className={styles.redAstrisk}>*</span> :
            </div>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              placeholder={t("CONTACT_FORM.EMAIL_PLACEHOLDER")}
            />
            {errors.email && (
              <span className={styles.errorMessage}>
                {t("CONTACT_FORM.ERROR_EMAIL")}
              </span>
            )}

            <div className={styles.textContactFormAbove}>
              {t("CONTACT_FORM.PHONE")}
            </div>
            <input
              type="phone"
              name="phone"
              {...register("phone", {
                required: false,
                pattern:
                  /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/,
              })}
              placeholder={t("CONTACT_FORM.PHONE_PLACEHOLDER")}
            />
            {errors.phone && (
              <span className={styles.errorMessage}>
                {t("CONTACT_FORM.ERROR_PHONE")}
              </span>
            )}

            <div className={styles.textContactFormAbove}>
              {t("CONTACT_FORM.SUBJECT")}
            </div>
            <input
              type="text"
              name="subject"
              {...register("subject", {
                required: {
                  value: false,
                  message: t("CONTACT_FORM.SUBJECT_ERROR"),
                },
                maxLength: {
                  value: 75,
                  message: t("CONTACT_FORM.SUBJECT_LENGTH"),
                },
              })}
              placeholder={t("CONTACT_FORM.SUBJECT_PLACEHOLDER")}
            />
            {errors.subject && (
              <span className={styles.errorMessage}>
                {errors.subject.message}
              </span>
            )}

            <div className={styles.textContactFormAbove}>
              {t("CONTACT_FORM.MESSAGE")}
              <span className={styles.redAstrisk}>*</span> :
            </div>
            <textarea
              rows={5}
              name="message"
              {...register("message", {
                required: true,
              })}
              placeholder={t("CONTACT_FORM.MESSAGE_PLACEHOLDER")}
            ></textarea>
            {errors.message && (
              <span className={styles.errorMessage}>
                {t("CONTACT_FORM.MESSAGE_ERROR")}{" "}
              </span>
            )}
            <div className={styles.requiredAsterisk}>
              <span className={styles.redAstrisk}>*</span>{" "}
              {t("CONTACT_FORM.ASTERISK")}
            </div>

            <button type="submit" className={styles.btnContactForm}>
              {t("CONTACT_FORM.SUBMIT")}{" "}
            </button>
          </form>
        </div>
      </div>
      {alertInfo.display && (
        <div role="alert">
          {alertInfo.message}
          <button
            type="button"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
