import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          1: "Experiences",
          2: "Languages",
          3: "Projects",
        },
        buttonBackToTop: "Back to Top",
        buttonGoBack: "Go Back",
        stackUsed: "Stack used",
        AboutProject: "About",
        Carousel: "Project photos",
        filterStack: "All",
        listOfProjects: "List of projects",
        errorMessage: "Sorry, this page doesn't exist",

        contactText:
          "Need some HTML, CSS, or JavaScript magic? Don't hesitate!\n Reach out to me. Whether it's about web design, responsive layouts, job opportunities or designing exceptional user journeys, I'm here to help.\n Let's turn your digital dreams into reality!",
        LanguagesTitle: "Languages and Tools",
        expTitle: {
          1: "Personal goal pursuit | Career break",
          2: "Supervisor",
          3: "Supervisor",
          4: "Laborer",
          5: "Master's degree",
          6: "Retail worker | Student job",
          7: "Bachelor's degree",
          8: "Fullstack web development, computer programming",
          9: "React Course 2023: React, Redux, Tailwind CSS & More",
          10: "Javascript course",
          11: "NextJS",
          12: "Web Developer",
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
          14: "September 2023",
          15: "July 2023-Now",
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
            1: "Led 30-person, workshop team.",
            2: "Ensured rigorous quality control for production standards.",
            3: "Strived to boost production efficiency and output.",
          },
          7: "Assembling components in the workshop area.",
          8: "Master Territorial Sustainable Development Policies.",
          9: {
            1: "Collaborated with colleagues for efficient store operations and customer satisfaction.",
            2: "Prepared accurate customer orders with attention to detail.",
            3: "Prioritized safety by following guidelines.",
          },
          10: "Bachelor's degree, Territory development and environment.",
          11: {
            1: "Problem-solving.",
            2: "Collaborating for store operations.",
            3: "Customer interactions, security, and safety.",
            4: "Organizing products attractively.",
            5: "Managing inventory and restocking notifications.",
          },
          12: "NextJS features like pre-rendering, SSR, data fetching, file-based routing and authentication",
          13: "Self-employed, I work on various projects, either for clients or for my own projects",
        },
        localisationExp: {
          1: "Gunnedah and Woolooga solar plant (Australia)",
          2: "Glenrowan solar plant (Australia)",
          3: "Limondale solar plant (Australia)",
        },
        locationInfos: "Location:",
        textInfos: {
          1: "I am a team player, creative and passionate, highly organized, 'can-do'attitude, reliable. With a Bachelor's degree in territory development and environment, followed by a Master's degree in sustainable development, I have amassed valuable experience in the solar industry, where I successfully held management positions overseeing environmental projects.",
          2: "Motivated by a desire for career transition, I pursued further education in Full Stack Web Development at Le Wagon in Montreal, focusing my expertise on Front-end development.",
        },
        funfacts: {
          1: "As an art enthusiast, drawing is, to me, an expression of my creativity. I like to think of coding the same way as drawing, just substituting a pen with letters and numbers.",
          2: "I've supervised 150+ individuals on Australian solar plant projects, highlighting the importance of teamwork to me.",
          3: "Sports hold a special place in my heart, with skiing being a true passion. During my younger years, I even competed as a semi-professional skier.",
        },
      },
    },
    fr: {
      translation: {
        navbar: {
          1: "Expériences",
          2: "Langages",
          3: "Projets",
        },
        buttonBackToTop: "Haut de Page",
        buttonGoBack: "Retour",
        stackUsed: "Stack utilisées",
        AboutProject: "A propos",
        Carousel: "Photos du projet",
        filterStack: "Tout",
        listOfProjects: "Liste des projets",
        errorMessage: "Désolé, cette page n'existe pas",

        contactText:
          "Besoin d'une touche de magie en HTML, CSS ou JavaScript ?\n N'hésitez pas à me contacter. Que ce soit pour la conception de sites web, des opportunités d'emploi ou la conception d'expériences utilisateur exceptionnelles. \n Transformons vos rêves numériques en réalité !",
        LanguagesTitle: "Langages et Outils",
        expTitle: {
          1: "Poursuite d'objectifs personnels",
          2: "Superviseur",
          3: "Superviseur",
          4: "Ouvrier",
          5: "Master",
          6: "Employé de vente | Job étudiant",
          7: "License",
          8: "Développement web Fullstack, programmation informatique",
          9: "React 2023: React, Redux, Tailwind CSS & Plus",
          10: "Cours sur Javascript",
          12: "Développeur Web",
        },
        date: {
          1: "Août 2023",
          2: "Juillet 2023",
          3: "Avril 2023-Juin 2023",
          4: "Octobre 2022-Avril 2023",
          5: "Mars 2021-Octobre 2022",
          6: "Juillet 2020-Février 2021",
          7: "Octobre 2019-Février 2020",
          8: "Décembre 2018-Octobre 2019",
          9: "Octobre 2018-Décembre 2018",
          10: "Septembre 2016-Septembre 2018",
          11: "Novembre 2016-Août 2018",
          12: "Septembre 2012-Juillet 2016",
          13: "Janvier 2014-Septembre 2016",
          14: "Septembre 2023",
          15: "Juillet 2023-Présent",
        },
        locationExp: {
          1: "Université Le Mans",
          2: "Université Bordeaux Montaigne",
        },
        experienceExp: {
          1: "Formation intensive de 9 semaines en bootcamp de codage, apprentissage de HTML, CSS, Bootstrap, JavaScript, Figma, Trello, SQL, git, GitHub, Heroku et Ruby on Rails.",
          2: "Poursuite d'objectifs personnels : investissement à travers CTO, PEA et LI. De plus, j'ai investi dans l'immobilier en mettant en œuvre une stratégie d'achat, de rénovation et de revente.",
          3: {
            1: "Direction des équipes de 15 personnes à Gunnedah et de 30 à Woolooga.",
            2: "Géré les opérations, la qualité, l'organisation et la sécurité de l'équipe.",
            3: "Amélioré l'efficacité de la production pour des performances plus accrues.",
          },
          4: {
            1: "Aidé les superviseurs en accompagnant une équipe de 15 membres, travaillant sur des câbles électriques souterrains, en priorisant l'organisation de l'équipe.",
            2: "Assuré le contrôle de la qualité pour les boîtes de combinaison et les unités de conditionnement de puissance (PCU).",
          },
          5: {
            1: "Direction d'une équipe de 15 membres, améliorant l'organisation des tâches et les performances.",
            2: "Supervision de la construction des composants.",
            3: "Mise en place des mesures de sécurité.",
            4: "Réalisation d'évaluations sur le terrain pour vérifier la conformité aux normes de qualité des modules.",
          },
          6: {
            1: "Direction d'une équipe de 30 personnes.",
            2: "Veillé à un contrôle qualité rigoureux, conformément aux normes de production.",
            3: "Amélioration de l'efficacité de la production.",
          },
          7: "Assemblage de composants dans la zone de l'atelier.",
          8: "Master gestion des territoires et développement local.",
          9: {
            1: "Collaboration avec mes collègues pour assurer le bon fonctionnement du magasin et la satisfaction des clients.",
            2: "Préparation des commandes, en portant une attention particulière aux détails.",
            3: "Prioritisation de la sécurité en suivant les directives.",
          },
          10: "Diplôme de licence en développement territorial et environnement.",
          11: {
            1: "Résolution de problèmes.",
            2: "Collaboration pour les opérations en magasin.",
            3: "Interactions avec les clients, sécurité et sûreté.",
            4: "Organisation attractive des produits.",
            5: "Gestion des stocks et notifications de réapprovisionnement.",
          },
          12: "Fonctionnalités de NextJS telles que le pré-rendu, le SSR (rendu côté serveur), la récupération de données, routing et l'authentification.",
          13: "Travailleur indépendant, je travaille sur divers projets, que ce soit pour des clients ou pour mes propres projets.",
        },
        localisationExp: {
          1: "Centrale solaire de Gunnedah et de Woolooga (Australie)",
          2: "Centrale solaire de Glenrowan (Australie)",
          3: "Centrale solaire de Limondale (Australie)",
        },
        locationInfos: "Localisation :",
        textInfos: {
          1: "Comment me décrire ? Créatif, passionné, hautement organisé, avec une attitude positive et fiable, j'apprécie le travail d'équipe. Je suis titulaire d'une licence en aménagement du territoire et environnement, suivie d'un master en développement durable. J'ai acquis une expérience précieuse dans l'industrie solaire, où j'ai occupé avec succès des postes de superviseur.",
          2: "Motivé par le désir de changer de carrière, j'ai suivi une formation intensive en développement web Full Stack à Le Wagon Montréal, en me spécialisant dans le développement Front-End.",
        },
        funfacts: {
          1: "En tant qu'amateur d'art, le dessin est, pour moi, une expression de ma créativité. J'aime penser la programmation de la même manière que le dessin, en remplaçant un stylo par des lettres et des chiffres.",
          2: "J'ai supervisé plus de 150 personnes sur des projets de centrales solaires en Australie, le travail d'équipe est très important pour moi.",
          3: "Le sport occupe une place spéciale dans mon cœur, le ski étant une véritable passion. Plus jeunes, j'ai fais de la compétition en tant que skieur semi-professionnel.",
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
