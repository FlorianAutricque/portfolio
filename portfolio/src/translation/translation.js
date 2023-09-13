import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        contactText:
          "Need some HTML, CSS, or JavaScript magic? Don't hesitate!\n Reach out to me. Whether it's about web design, responsive layouts, job opportunities or designing exceptional user journeys, I'm here to help.\n Let's turn your digital dreams into reality!",
        LanguagesTitle: "Languages and Tools",
        expTitle: {
          1: "Personal goal pursuit | Career break",
          2: "Leading Hand/Supervisor",
          3: "Leading Hand",
          4: "Laborer",
          5: "Master's degree",
          6: "Retail worker | Student job",
          7: "Bachelor's degree",
          8: "Fullstack web development, computer programming",
        },
        date: {
          1: "August 2023",
          2: "July 2023",
          3: "April 2023-June 2023",
          4: "October 2022-April 2023",
          5: "March 2021-October 2022",
          6: "July 2020-February 2021",
          7: "October 2019-February 2020",
          8: "December 2018-October 2019",
          9: "October 2018-December 2018",
          10: "September 2016-September 2018",
          11: "November 2016-August 2018",
          12: "September 2012-July 2016",
          13: "January 2014-September 2016",
        },
        locationExp: {
          1: "Le Mans University",
          2: "University Bordeaux Montaigne",
        },
        experienceExp: {
          1: "9 weeks intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript, Figma, Trello, SQL, git, GitHub, Heroku and Ruby on Rails.",
          2: "Pursuing personal goal of investment opportunities through CTO, PEA, LI. Additionally, I invested into real estate by implementing a buy, renovation, and re-sell strategy.",
          3: {
            1: "Led teams of 15 in Gunnedah and 30 in Woolooga.",
            2: "Managed operations, quality, organization, and safety.",
            3: "Enhanced production efficiency for better performance.",
          },
          4: {
            1: "Assisted supervisors with a 15-member underground electric cable team, prioritizing team organization.",
            2: "Ensured quality control for combiner boxes and power conditioning units (PCUs).",
          },
          5: {
            1: "Managed a 15-member team, improving task organization and performance.",
            2: "Ensured high-quality component construction.",
            3: "Implemented workplace safety measures.",
            4: "Conducted field assessments to verify module quality standards.",
          },
          6: {
            1: "Led 30-person workshop team.",
            2: "Ensured rigorous quality control for production standards.",
            3: "Strived to boost production efficiency and output.",
          },
          7: "Assembling components in the workshop area.",
        },
      },
    },
    fr: {
      translation: {
        contactText:
          "Besoin d'une touche de magie en HTML, CSS ou JavaScript ?\n N'hésitez pas à me contacter. Que ce soit pour la conception de sites web, des opportunités d'emploi ou la conception d'expériences utilisateur exceptionnelles. \n Transformons vos rêves numériques en réalité !",
        LanguagesTitle: "Langages et Outils",
        expTitle: {
          1: "Poursuite d'objectifs personnels",
          2: "Chef d'équipe/Superviseur",
          3: "Chef d'équipe",
          4: "Ouvrier",
          5: "Master",
          6: "Employé de vente | Job étudiant",
          7: "License",
          8: "Développement web Fullstack, programmation informatique",
        },
        date: {
          1: "Août 2023",
          2: "Juillet 2023",
          3: "Avril 2023-Juin 2023",
          4: "Octobre 2022-Avril 2023",
          5: "Mars 2021-Octobre 2022",
          6: "Juillet 2020-Février 2021",
          7: "Octobre 2019-Février 2020",
          8: "Decembre 2018-Octobre 2019",
          9: "Octobre 2018-Decembre 2018",
          10: "Septembre 2016-Septembre 2018",
          11: "Novembre 2016-Août 2018",
          12: "Septembre 2012-Juillet 2016",
          13: "Janvier 2014-Septembre 2016",
        },
        locationExp: {
          1: "Université Le Mans",
          2: "Université Bordeaux Montaigne",
        },
        experienceExp: {
          1: "Formation intensive de 9 semaines en bootcamp de codage, apprentissage de HTML, CSS, Bootstrap, JavaScript, Figma, Trello, SQL, git, GitHub, Heroku et Ruby on Rails.",
          2: "Poursuite d'objectifs personnels : investissement à travers CTO, PEA et LI. De plus, j'ai investi dans l'immobilier en mettant en œuvre une stratégie d'achat, de rénovation et de revente.",
          3: {
            1: "J'ai dirigé des équipes de 15 à Gunnedah et de 30 à Woolooga.",
            2: "J'ai géré les opérations, la qualité, l'organisation et la sécurité de l'équipe.",
            3: "J'ai amélioré l'efficacité de la production pour des performances plus accrues.",
          },
          4: {
            1: "J'ai aidé les superviseurs avec une équipe de 15 membres travaillant sur des câbles électriques souterrains en priorisant l'organisation de l'équipe.",
            2: "J'ai assuré le contrôle de la qualité pour les boîtes de combinaison et les unités de conditionnement de puissance (PCU).",
          },
          5: {
            1: "J'ai dirigé une équipe de 15 membres, améliorant l'organisation des tâches et les performances.",
            2: "Supervision de la construction des composants.",
            3: "J'ai mis en place des mesures de sécurité.",
            4: "J'ai réalisé des évaluations sur le terrain pour vérifier la conformité aux normes de qualité des modules.",
          },
          6: {
            1: "J'ai dirigé une équipe de 30 personnes.",
            2: "J'ai veillé à un contrôle qualité rigoureux conformément aux normes de production.",
            3: "J'ai cherché à améliorer l'efficacité de la production et la production globale.",
          },
          7: "Assemblage de composants dans la zone de l'atelier.",
        },
      },
    },
  },
  lng: selectedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
