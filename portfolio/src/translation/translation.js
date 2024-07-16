import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const selectedLanguage = localStorage.getItem("selectedLanguage") || "fr";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          1: "Experiences",
          2: "Languages",
          3: "Projects",
        },
        buttonBackToTop: "> clear",
        buttonGoBack: "> cd ..",
        stackUsed: "Stack used",
        AboutProject: "About",
        Carousel: "Project photos",
        filterStack: "All",
        listOfProjects: "List of projects",
        errorMessage: "Sorry, this page doesn't exist",

        contactText:
          "Need some web magic? Don't hesitate!\n Reach out to me. Whether it's about web design, responsive layouts, job opportunities or designing exceptional user journeys, I'm here to help.\n Let's turn your digital dreams into reality!",
        LanguagesTitle: "Languages and Tools",
        expTitle: {
          1: "Personal goal pursuit | Career break",
          2: "Supervisor",
          3: "Supervisor",
          4: "Laborer",
          5: "Master's degree",
          6: "Retail worker | Student job",
          7: "Bachelor's degree",
          8: "Fullstack web development, computer programming Bootcamp",
          9: "React Course 2023: React, Redux, Tailwind CSS & More",
          10: "Javascript course",
          11: "NextJS",
          12: "Web Developer - Freelance",
          13: `<a href="https://alian.dev/" target="_blank">Alian web S.E.N.C </a> : Co-founder & Web Developer`,
          14: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
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
          16: "April 2024-Now",
          17: "June 2024",
        },
        locationExp: {
          1: "Le Mans University",
          2: "University Bordeaux Montaigne",
        },
        experienceExp: {
          1: `<a href="https://www.lewagon.com/fr" target="_blank" >9 weeks intensive coding bootcamp</a> learning HTML, CSS, Bootstrap, JavaScript, Figma, Trello, SQL, git, GitHub, Heroku, Stimulus and Ruby on Rails.`,
          2: "Pursuing personal goal of investment opportunities through CTO, PEA, LI. Additionally, I invested into real estate by implementing a buy, renovation, and re-sell strategy.",
          3: "- <strong>Management </strong>of 15 people in Gunnedah and 30 in Woolooga. <br />  <br />- Responsible of overseeing operations, <strong>quality checks</strong>, team organization. <br />  <br />  - Ensuring adherence to safety protocols and regulations during construction and operation. <br />  <br /> - Managing a team of technicians and coordinating schedules to ensure smooth operation. <br />  <br /> - <strong>Enhancing production efficiency </strong>to <strong>optimize overall performance</strong>.",
          4: "- Implementing efficient work schedules and task assignments for 15 individuals to ensure timely completion of underground electric cable work projects. <br />  <br /> - Developing and implementing <strong>quality assurance </strong>processes for combiner boxes and power conditioning units (PCUs) to ensure compliance with industry standards and specifications. <br />  <br />- Conducting <strong>inspections and quality control checks</strong> at various stages of production and installation to identify and rectify any issues. <br />  <br /> - <strong>Providing training and guidance </strong>to team members on best practices for quality assurance and quality control measures, fostering a culture of excellence and continuous improvement. ",
          5: "- <strong>Managing</strong> a team of 15 individuals. <strong>Organizing </strong>their tasks and <strong>increasing their performances</strong>. <br />  <br /> - Conducting <strong>quality assurance </strong>and quality control assessments of modules deployed in the field, verifying their adherence to specified standards. <br />  <br />- Maintaining detailed <strong>records of quality control activities</strong>, including inspection reports, test results, and corrective actions taken, to ensure accountability and traceability.",
          6: "- <strong>Managing</strong> a team of 30 individuals. Organizing their tasks and increasing their performances. <br />  <br /> - Mentoring team members to uphold rigorous standards of quality assurance and control, <strong>installing a culture of excellence</strong> and perpetual enhancement. <br />  <br /> - Performing thorough <strong>quality assurance and quality control</strong> evaluations of field modules to validate their compliance with predetermined standards and specifications. <br />  <br /> - Delivering comprehensive <strong>training sessions </strong>and offering ongoing guidance to team members, emphasizing the importance of adhering to quality assurance and quality control measures, and cultivating a culture centered on excellence and continual enhancement.",
          7: "Assembling components in the workshop area.",
          8: `<a href="https://www.univ-lemans.fr/fr/formation/catalogue-des-formations/master-lmd-MLMD/sciences-humaines-et-sociales-0001/master-gestion-des-territoires-et-developpement-local-formation-a-distance-IXRITAMU/parcours-politiques-territoriales-de-developpement-durable-politer-master-gestion-des-territoires-et-developpement-local-formation-a-distance-KFCC722V.html" target="_blank" > Master</a> Territorial Sustainable Development Policies.`,
          9: {
            1: "Collaborated with colleagues for efficient store operations and customer satisfaction.",
            2: "Prepared accurate customer orders with attention to detail.",
            3: "Prioritized safety by following guidelines.",
          },
          10: `<a href="https://formations.u-bordeaux-montaigne.fr/fr/catalogue-des-formations/licence-XA/licence-geographie-et-amenagement-KQMCIPBB.html" target="_blank" > Bachelor's degree</a>, Territory development and environment.`,
          11: {
            1: "Problem-solving.",
            2: "Collaborating for store operations.",
            3: "Customer interactions, security, and safety.",
            4: "Organizing products attractively.",
            5: "Managing inventory and restocking notifications.",
          },
          12: `<a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_blank" > NextJS</a> features like pre-rendering, SSR, data fetching, file-based routing and authentication`,
          13: "<strong> - Simon Veil showcase Website</strong> : <br /> &nbsp; &nbsp; &nbsp;- Collaborated with a <strong> senior web developer</strong>  to create a showcase website for a medical home using Nuxt.js and Vue.js. <br /> &nbsp; &nbsp; &nbsp;- Took charge of<strong>  designing and coding key sections </strong> including the landing page, hours, and services. <br /> <br /> - <strong> MovieSphere</strong> : <br /> &nbsp; &nbsp; &nbsp;- Built a <strong> React-based app</strong>  with HTML,  CSS and JavaScript for easy movie and series discovery. <br /> &nbsp; &nbsp; &nbsp;- Integrated OMDB API to <strong> fetch </strong> comprehensive data about movies and series <br /> &nbsp; &nbsp; &nbsp;- Integrated Google YouTube API to seamlessly display trailers for any selected movies or series, enhancing user engagement. <br /> &nbsp; &nbsp; &nbsp;- Features include a watchlist and a range of related movies or series based on the selected movie or serie <br /> &nbsp; &nbsp; &nbsp;- Provided dynamic suggestions for trending movies and series, as well as categorized recommendations by genre <br /> <br />- Others:  <br /> &nbsp; &nbsp; &nbsp; <strong>Natours</strong> : Web application for travel, allowing users to view activities, pay using Stripe, login, change password and profile picture. Receive emails (welcome, new password). Depending on status: CRUD operations with MongoDB and Atlas. Create my own API with Postman. Developed using Node.js and Pug.<br /> &nbsp; &nbsp; &nbsp;- <strong> Weather app</strong> : fetch weather informations and photos about a location (React, Javascript, CSS, HTML) <br /> &nbsp; &nbsp; &nbsp;- <strong> Hairbnb</strong> : copy of Airbnb but for wigs, can book, add or delete a wig (Ruby, Javascript, stimulus, CSS, TailwindCSS, HTML)",
          14: "- <strong>Alian-Web</strong> : <br /> &nbsp; &nbsp; &nbsp; - <strong> Multi-page showcase website</strong>  for my startup utilizing React, JavaScript, CSS, and HTML.<br /> &nbsp; &nbsp; &nbsp; - Implemented <strong> modern design </strong> elements and animations to enhance user experience and engagement. <br /> &nbsp; &nbsp; &nbsp; - Incorporated a <strong>  contact form </strong>  enabling seamless communication by directly sending inquiries to the company's email. <br /> <br /> - <strong> Oc Portfolio</strong>   (On-going): <br /> &nbsp; &nbsp; &nbsp;- Created a <strong> multipage showcase website </strong> using React, JavaScript, and CSS. <br /> &nbsp; &nbsp; &nbsp;- Utilized modern design principles to enhance visual appeal and <strong> user experience</strong> . <br /> &nbsp; &nbsp; &nbsp;- Implemented a contact form feature for seamless <strong> communication with users</strong> .",
          15: "<strong>- Fundamental Technologies</strong>: <br /> &nbsp; &nbsp; &nbsp; - Mastery of Node.js, Express, MongoDB, and Mongoose (JavaScript driver for MongoDB). <br />&nbsp; &nbsp; &nbsp; - Deep understanding of Node's internal workings: event loop, blocking vs non-blocking code, streams, modules, etc. <br /> <br /> <strong>- Application Development</strong>: <br />&nbsp; &nbsp; &nbsp; - Creation of a complete, functional, and aesthetically pleasing application from start to finish, including both a RESTful API and server-side rendered website. <br /> &nbsp; &nbsp; &nbsp; - Implementation of CRUD operations with MongoDB and advanced usage of Mongoose, including advanced features. <br /> <br /> <strong>- Advanced Security and Authentication</strong>: <br /> &nbsp; &nbsp; &nbsp; - Implementation of advanced authentication and authorization features, including password reset. <br /> &nbsp; &nbsp; &nbsp; - Securing the application with encryption, sanitization, and rate limiting.",
        },
        localisationExp: {
          1: "Gunnedah and Woolooga solar plant (Australia)",
          2: "Glenrowan solar plant (Australia)",
          3: "Limondale solar plant (Australia)",
        },
        locationInfos: "Location:",
        textInfos: {
          1: "<strong>Passionate Front-End Developer</strong> with a flair for web design and art, dedicated to mastering new technologies and coding. I possess a <strong>strong skill set </strong>covering HTML, CSS, JavaScript, React, Tailwind, NextJS and SCSS. Embarked on a career change from <strong>managerial roles</strong> in renewable energy projects to pursue a fulfilling journey in web development. My background and experience in programming and web modeling make me an <strong>adaptable developer who enjoys learning and working collaboratively</strong>.",
          2: `With a <a href="https://formations.u-bordeaux-montaigne.fr/fr/catalogue-des-formations/licence-XA/licence-geographie-et-amenagement-KQMCIPBB.html" target="_blank" > <strong>Bachelor's degree</strong></a> in territory development and environment, followed by a <a href="https://www.univ-lemans.fr/fr/formation/catalogue-des-formations/master-lmd-MLMD/sciences-humaines-et-sociales-0001/master-gestion-des-territoires-et-developpement-local-formation-a-distance-IXRITAMU/parcours-politiques-territoriales-de-developpement-durable-politer-master-gestion-des-territoires-et-developpement-local-formation-a-distance-KFCC722V.html" target="_blank" > <strong>Master's degree</strong> </a> in sustainable development, I have amassed valuable experience in the solar industry, where I successfully held management positions overseeing environmental projects. Motivated by a desire for <strong>career transition</strong>, I pursued further education in Full Stack Web Development at <strong>{{LeWagon}}</strong></0>  in Montreal, focusing my expertise on Front-end development.`,
        },
        funfacts: {
          1: "As an art enthusiast, drawing is, to me, an expression of my creativity. I like to think of coding the same way as drawing, just substituting a pen with letters and numbers.",
          2: "I've supervised 150+ individuals on Australian solar plant projects, highlighting the importance of teamwork to me.",
          3: "Sports hold a special place in my heart, with skiing being a true passion. During my younger years, I even competed as a semi-professional skier.",
        },
        languages: {
          lang: "My preferred languages",
          framework: "My preferred frameworks",
          libraries: "My preferred libraries",
          others: "Others",
        },
        CONTACT_FORM: {
          NAME: "Your name ",
          NAME_PLACEHOLDER: "Name",
          ERROR_NAME: "Please enter your name",
          NAME_LENGTH: "Please use 30 characters or less",
          EMAIL: "Your email address ",
          EMAIL_PLACEHOLDER: "Mail",
          ERROR_EMAIL: "Please enter a valid email address",
          PHONE: "Your phone number :",
          PHONE_PLACEHOLDER: "Number",
          ERROR_PHONE: "Please enter a valid phone number",
          SUBJECT: "Subject :",
          SUBJECT_PLACEHOLDER: "Subject",
          SUBJECT_ERROR: "Please enter a subject ",
          SUBJECT_LENGTH: "Subject cannot exceed 75 characters",
          MESSAGE: "Message ",
          MESSAGE_PLACEHOLDER: "Message",
          MESSAGE_ERROR: "Please enter a message",
          SUBMIT: "Submit",
          SUCCESS: {
            MESSAGE_1: "Form submission was successful!",
          },
          ALERT: {
            MESSAGE_1: "Uh oh. Something went wrong.",
          },
          ASTERISK: "Required fields",
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
        buttonBackToTop: "> clear",
        buttonGoBack: "> cd ..",
        stackUsed: "Stack utilisées",
        AboutProject: "A propos",
        Carousel: "Photos du projet",
        filterStack: "Tout",
        listOfProjects: "Liste des projets",
        errorMessage: "Désolé, cette page n'existe pas",

        contactText:
          "Besoin d'une touche de web magie ?\n N'hésitez pas à me contacter. Que ce soit pour la conception de sites web, des opportunités d'emploi ou la conception d'expériences utilisateur exceptionnelles. \n Transformons vos rêves numériques en réalité !",
        LanguagesTitle: "Langages et Outils",
        expTitle: {
          1: "Poursuite d'objectifs personnels",
          2: "Superviseur",
          3: "Superviseur",
          4: "Ouvrier",
          5: "Diplome Master",
          6: "Employé de vente | Job étudiant",
          7: "Diplome Licence",
          8: "Bootcamp en développement web Fullstack, programmation informatique",
          9: "React 2023: React, Redux, Tailwind CSS & Plus",
          10: "Cours sur Javascript",
          12: "Développeur Web - Freelance",
          13: `<a href="https://alian.dev/" target="_blank">Alian web S.E.N.C </a> : Co fondateur & Développeur Web`,
          14: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
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
          16: "Avril 2024-Présent",
          17: "Juin 2024",
        },
        locationExp: {
          1: "Université Le Mans",
          2: "Université Bordeaux Montaigne",
        },
        experienceExp: {
          1: `<a href="https://www.lewagon.com/fr" target="_blank" >Formation intensive de 9 semaines</a> en bootcamp de codage, apprentissage de HTML, CSS, Bootstrap, JavaScript, Figma, Trello, SQL, git, GitHub, Heroku, Stimulus et Ruby on Rails.`,
          2: "Poursuite d'objectifs personnels : investissement à travers CTO, PEA et LI. De plus, j'ai investi dans l'immobilier en mettant en œuvre une stratégie d'achat, de rénovation et de revente.",
          3: "- <strong>Gestion</strong> de 15 personnes à Gunnedah et 30 à Woolooga <br /> <br /> - Responsable de superviser les opérations, les <strong>contrôles qualité</strong> et l'organisation des équipes <br /> <br /> - Garantir le respect des protocoles de sécurité et des réglementations pendant la construction et l'exploitation <br /> <br />- Gestion d'une équipe de techniciens et coordination des plannings pour assurer un fonctionnement fluide<br /> <br />- <strong>Amélioration de l'efficacité</strong> de production pour <strong>optimiser les performances</strong> globales",
          4: "- Mise en place de plannings de travail efficaces et d'attributions de tâches pour 15 personnes afin d'assurer l'achèvement en temps voulu des projets de travaux de câblage électrique souterrain <br /> <br />- Développement et mise en œuvre de processus d'<strong>assurance qualité </strong>pour les boîtiers combiner et les unités de conditionnement de puissance (PCU) afin de garantir la conformité aux normes et spécifications de l'industrie <br /> <br />- Réalisation d'<strong>inspections</strong> et de <strong>contrôles de qualité</strong> à différentes étapes de la production et de l'installation pour identifier et rectifier tout problème <br /> <br />- <strong>Formation et conseils</strong> aux membres de l'équipe sur les meilleures pratiques en matière d'assurance qualité et de contrôle qualité, favorisant une culture d'excellence et d'amélioration continue",
          5: "- <strong>Gestion</strong> d'une équipe de 15 personnes. <strong>Organisation</strong> de leurs tâches et amélioration de leurs performances  <br /> <br />- Réalisation d'évaluations d'assurance qualité et de contrôle qualité des modules déployés sur le terrain, vérifiant leur conformité aux normes spécifiées <br /> <br />- <strong>Tenue de registres détaillés</strong> des activités de contrôle qualité, y compris les rapports d'inspection, les résultats des tests et les actions correctives entreprises, pour garantir la responsabilité et la traçabilité",
          6: "- <strong>Gestion</strong> d'une équipe de 30 personnes. Organisation de leurs tâches et amélioration de leurs performances <br /> <br />- Encadrement des membres de l'équipe pour maintenir des normes rigoureuses d'assurance qualité et de contrôle, en <strong>inculquant une culture d'excellence </strong>et d'amélioration continue <br /> <br />- Réalisation d'<strong>évaluations</strong> approfondies d'<strong>assurance qualité</strong> et de contrôle qualité des modules sur le terrain pour valider leur conformité aux normes et spécifications prédéterminées <br /> <br />- Dispensation de sessions de <strong>formation</strong> complètes et offre d'un accompagnement continu aux membres de l'équipe, en mettant l'accent sur l'importance du respect des mesures d'assurance qualité et de contrôle qualité",
          7: "Construction des composants de la zone de l'atelier en respectant strictement les protocoles et mesures de sécurité",
          8: `<a href="https://www.univ-lemans.fr/fr/formation/catalogue-des-formations/master-lmd-MLMD/sciences-humaines-et-sociales-0001/master-gestion-des-territoires-et-developpement-local-formation-a-distance-IXRITAMU/parcours-politiques-territoriales-de-developpement-durable-politer-master-gestion-des-territoires-et-developpement-local-formation-a-distance-KFCC722V.html" target="_blank" > Master</a> gestion des territoires et développement local.`,
          9: {
            1: "Collaboration avec mes collègues pour assurer le bon fonctionnement du magasin et la satisfaction des clients.",
            2: "Préparation des commandes, en portant une attention particulière aux détails.",
            3: "Prioritisation de la sécurité en suivant les directives.",
          },
          10: `<a href="https://formations.u-bordeaux-montaigne.fr/fr/catalogue-des-formations/licence-XA/licence-geographie-et-amenagement-KQMCIPBB.html" target="_blank" >Diplôme de licence</a> en développement territorial et environnement.`,
          11: {
            1: "Résolution de problèmes.",
            2: "Collaboration pour les opérations en magasin.",
            3: "Interactions avec les clients, sécurité et sûreté.",
            4: "Organisation attractive des produits.",
            5: "Gestion des stocks et notifications de réapprovisionnement.",
          },
          12: `Fonctionnalités de <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_blank" > NextJS</a> telles que le pré-rendu, le SSR (rendu côté serveur), la récupération de données, routing et l'authentification.`,
          13: "<strong>- Site web de démonstration Simon Veil</strong> : <br /> &nbsp; &nbsp; &nbsp; - Collaboration avec un <strong>développeur web senior</strong> pour créer un site web de démonstration pour une maison médicale en utilisant Nuxt.js et Vue.js. <br /> &nbsp; &nbsp; &nbsp; - Prise en charge de la <strong>conception et du codage de sections clés</strong> incluant la page d'accueil, les horaires et les services. <br /> <br /> - <strong>MovieSphere</strong> : <br /> &nbsp; &nbsp; &nbsp; - Création d'une <strong>application basée sur React</strong> avec HTML, CSS et JavaScript pour une découverte facile de films et de séries. <br /> &nbsp; &nbsp; &nbsp; - Intégration de l'API OMDB pour <strong>récupérer</strong> des données complètes sur les films et les séries. <br /> &nbsp; &nbsp; &nbsp; - Intégration de l'API YouTube de Google pour afficher sans interruption des bandes-annonces pour n'importe quel film ou série sélectionné, améliorant ainsi l'engagement des utilisateurs. <br /> &nbsp; &nbsp; &nbsp; - Les fonctionnalités incluent une watchlist et une gamme de films ou séries connexes basés sur le film ou la série sélectionné. <br /> &nbsp; &nbsp; &nbsp; - Suggestions dynamiques pour les films et les séries tendance, ainsi que des recommandations catégorisées par genre. <br /> <br /> - Autres : <br /> &nbsp; &nbsp; &nbsp; <strong>Natours</strong> : Application web pour les voyages, permettant de voir des activités, de payer avec Stripe, de se connecter, de changer de mot de passe et de photo de profil. Réception d'e-mails (bienvenue, nouveau mot de passe). En fonction du statut, opérations CRUD avec MongoDB et Atlas. Création de mon propre API avec Postman. Réalisée avec Node.js et Pug. <br /> &nbsp; &nbsp; &nbsp; - <strong>Weather App</strong> : récupération des informations météorologiques et des photos concernant un emplacement (React, JavaScript, CSS, HTML). <br /> &nbsp; &nbsp; &nbsp; - <strong>Hairbnb</strong> : copie d'Airbnb mais pour des perruques, possibilité de réserver, ajouter ou supprimer une perruque (Ruby, JavaScript, Stimulus, CSS, TailwindCSS, HTML).",
          14: "<strong>Alian-Web</strong> : <br /> &nbsp; &nbsp; &nbsp; - <strong>Site web de démonstration multi-pages</strong> pour ma startup utilisant React, JavaScript, CSS et HTML.<br /> &nbsp; &nbsp; &nbsp; - Implémentation d'éléments de <strong>design moderne</strong> et d'animations pour améliorer l'expérience utilisateur et l'engagement. <br /> &nbsp; &nbsp; &nbsp; - Intégration d'un <strong>formulaire de contact</strong> permettant une communication fluide en envoyant directement les demandes à l'e-mail de l'entreprise. <br /> <br /> - <strong>Portfolio Oc</strong> (En cours) : <br /> &nbsp; &nbsp; &nbsp; - Création d'un <strong>site web multi-pages</strong> en utilisant React, JavaScript et CSS. <br /> &nbsp; &nbsp; &nbsp; - Utilisation de principes de <strong>design moderne</strong> pour améliorer l'attrait visuel et l'<strong>expérience utilisateur</strong>. <br /> &nbsp; &nbsp; &nbsp; - Implémentation d'une fonctionnalité de formulaire de contact pour une <strong>communication fluide avec les utilisateurs</strong>.",
          15: "<strong> - Technologies Fondamentales</strong> : <br /> &nbsp; &nbsp; &nbsp;- Maîtrise de Node.js, Express, MongoDB et Mongoose (driver JavaScript pour MongoDB). <br /> &nbsp; &nbsp; &nbsp; - Compréhension approfondie du fonctionnement interne de Node : boucle d'événements, code bloquant vs non bloquant, flux, modules, etc. <br /> <br /> - <strong>Développement d'Applications </strong>: <br />&nbsp; &nbsp; &nbsp; - Création d'une application complète, fonctionnelle et esthétique de bout en bout, comprenant à la fois une API RESTful et un site web rendu côté serveur.  <br /> &nbsp; &nbsp; &nbsp; - Implémentation des opérations CRUD avec MongoDB et utilisation avancée de Mongoose, y compris les fonctionnalités avancées.<br /> <br />  - <strong>Sécurité et Authentification Avancées</strong> : <br /> &nbsp; &nbsp; &nbsp;- Mise en place de fonctionnalités avancées d'authentification et d'autorisation, y compris la réinitialisation de mot de passe. <br /> &nbsp; &nbsp; &nbsp;- Sécurisation de l'application avec chiffrement, sanitisation, et limitation du taux d'accès.",
        },
        localisationExp: {
          1: "Centrale solaire de Gunnedah et de Woolooga (Australie)",
          2: "Centrale solaire de Glenrowan (Australie)",
          3: "Centrale solaire de Limondale (Australie)",
        },
        locationInfos: "Localisation :",
        textInfos: {
          1: "<strong>Développeur Front-End passionné</strong> avec un attrait pour le design web et l'art, une passion pour la maîtrise des nouvelles technologies et du codage. Je possède une <strong>solide expérience</strong> dans les langages HTML, CSS, JavaScript, React, Tailwind, Next.js et SCSS. J'ai entrepris un changement de carrière, passant d'un <strong>rôle de management</strong> dans des projets d'énergie renouvelable à une aventure enrichissante dans le développement web. Mon parcours et mon expérience en programmation et en modélisation web font de moi un <strong>développeur adaptable qui aime apprendre et travailler en équipe</strong>.",
          2: `Avec une <a href="https://formations.u-bordeaux-montaigne.fr/fr/catalogue-des-formations/licence-XA/licence-geographie-et-amenagement-KQMCIPBB.html" target="_blank" ><strong>Licence</strong></a> en aménagement du territoire et environnement, suivie d'un <a href="https://www.univ-lemans.fr/fr/formation/catalogue-des-formations/master-lmd-MLMD/sciences-humaines-et-sociales-0001/master-gestion-des-territoires-et-developpement-local-formation-a-distance-IXRITAMU/parcours-politiques-territoriales-de-developpement-durable-politer-master-gestion-des-territoires-et-developpement-local-formation-a-distance-KFCC722V.html" target="_blank" > <strong>Master</strong></a> en développement durable, j'ai accumulé une expérience précieuse dans l'industrie solaire, où j'ai occupé avec succès des postes de management supervisant divers projets environnementaux. Motivé par le désir d'une <strong>transition de carrière</strong>, j'ai suivi une formation en développement web Full Stack à <strong>{{LeWagon}}</strong></0>  à Montréal, en focalisant mon expertise sur le développement Front-end.`,
        },
        funfacts: {
          1: "En tant qu'amateur d'art, le dessin est, pour moi, une expression de ma créativité. J'aime penser la programmation de la même manière que le dessin, en remplaçant un stylo par des lettres et des chiffres.",
          2: "J'ai supervisé plus de 150 personnes sur des projets de centrales solaires en Australie, le travail d'équipe est très important pour moi.",
          3: "Le sport occupe une place spéciale dans mon cœur, le ski étant une véritable passion. Plus jeunes, j'ai fais de la compétition en tant que skieur semi-professionnel.",
        },
        languages: {
          lang: "Mes langages préférés",
          framework: "Mes frameworks préférés",
          libraries: "Mes librairies préférés",
          others: "Autres",
        },
        CONTACT_FORM: {
          NAME: "Votre nom ",
          NAME_PLACEHOLDER: "Nom",
          ERROR_NAME: "Veuillez entrer votre nom, s'il vous plaît",
          NAME_LENGTH: "Veuillez utiliser 30 caractères ou moins",
          EMAIL: "Votre adresse mail ",
          EMAIL_PLACEHOLDER: "Mail",
          ERROR_EMAIL: "Veuillez entrer une adresse mail valide",
          PHONE: "Votre numéro de téléphone :",
          PHONE_PLACEHOLDER: "Téléphone",
          ERROR_PHONE: "Veuillez entrer un numéro de téléphone valide",
          SUBJECT: "Sujet :",
          SUBJECT_PLACEHOLDER: "Sujet",
          SUBJECT_ERROR: "Veuillez entrer un sujet",
          SUBJECT_LENGTH: "Sujet ne pas être plus de 75 caractères",
          MESSAGE: "Message ",
          MESSAGE_PLACEHOLDER: "Message",
          MESSAGE_ERROR: "Veuillez entrer un message",
          SUBMIT: "Envoyer",
          SUCCESS: {
            MESSAGE_1: "L'envoi du formulaire a réussi !",
          },
          ALERT: {
            MESSAGE_1: "Oops. Quelque chose s'est mal passé",
          },
          ASTERISK: "Champs obligatoires",
        },
      },
    },
  },
  lng: selectedLanguage,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
