const projects = [
  {
    projectId: 1,
    name: "MovieSphere",
    mainImage: "/projectsImages/moviesphere/moviesphere1.webp",
    allImages: Array.from(
      { length: 9 },
      (_, index) => `/projectsImages/moviesphere/moviesphere${index + 1}.webp`
    ),
    description: {
      en: "Moviesphere is a comprehensive online platform designed to provide users with detailed information about movies and series. With a user-friendly interface, you can effortlessly search for your favorite movies or series, add them to your watchlist, watch trailers, and access essential details such as synopses. \nAdditionally, our platform offers recommendations for related movies or series within the same genre, enhancing your overall entertainment experience.",
      fr: "Moviesphere est une plateforme en ligne conçue pour fournir aux utilisateurs des informations détaillées sur des films et des séries. Avec une interface conviviale, vous pouvez facilement rechercher vos films ou séries préférés, les ajouter à votre liste de visionnage, regarder des bandes-annonces et accéder à des détails essentiels tels que les synopsys.\n De plus, cette plateforme propose des recommandations pour des films ou des séries connexes dans le même genre, améliorant ainsi votre expérience de divertissement.",
    },
    github: "https://github.com/FlorianAutricque/exercise/tree/main/03%20Movie",
    production: "https://moviesphere-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 2,
    name: "Plutus",
    mainImage: "/projectsImages/plutus/plutus1.webp",
    allImages: Array.from(
      { length: 6 },
      (_, index) => `/projectsImages/plutus/plutus${index + 1}.webp`
    ),
    description: {
      en: "Plutus is an application designed to help you manage your expenses. It allows you to add expenses, modify them, and delete them if necessary. You also have the option to add and update your salary. \n The application features a circular chart that summarizes your expenses. It also displays the total sum of calculations and the difference between your salary and expenses, showing you whether you've saved or lost money. \n Additionally, the color of your expenses changes based on the amount you add. Finally, you can customize the application by changing the language and currency according to your preferences.",
      fr: "Plutus est une application conçue pour vous aider à gérer vos dépenses. Elle vous permet d'ajouter des dépenses, de les modifier, et de les supprimer si nécessaire. Vous avez également la possibilité d'ajouter et de mettre à jour votre salaire. \n L'application intègre un diagramme circulaire qui récapitule vos dépenses. La somme totale des calculs et la différence entre votre salaire et vos dépenses sont aussi affichés, vous indiquant ainsi si vous avez économisé ou perdu de l'argent. \n De plus, la couleur de vos dépenses change en fonction de la valeur que vous y ajoutez. Enfin, vous pouvez personnaliser l'application en changeant la langue et la devise selon vos préférences.",
    },
    github:
      "https://github.com/FlorianAutricque/budget_planner/tree/main/budger_planner",
    production: "https://budget-planner-jw3e.onrender.com/",
    stack: ["All", "React", "Tailwind", "HTML", "JSX"],
  },
  {
    projectId: 3,
    name: "ToDo List Api",
    mainImage: "/projectsImages/todoapi/todoapi1.webp",
    allImages: Array.from(
      { length: 5 },
      (_, index) => `/projectsImages/todoapi/todoapi${index + 1}.webp`
    ),
    description: {
      en: "Here’s a short description for your to-do list app: This to-do list app allows you to manage tasks with full CRUD (Create, Read, Update, Delete) operations through a robust API.\n Built with TypeScript for type safety, it ensures data integrity and smooth interactions. Zod is used for form validation to guarantee that task descriptions are at least 10 characters long, status is a boolean, and dates are valid. Whether adding, editing, or deleting tasks, the app provides a seamless experience with real-time updates.",
      fr: "Cette application de liste de tâches vous permet de gérer vos tâches avec des opérations CRUD complètes (Créer, Lire, Mettre à jour, Supprimer) via une API robuste. \nDéveloppée avec TypeScript pour garantir la sécurité des types, elle assure l'intégrité des données et des interactions fluides. Zod est utilisé pour la validation des formulaires, garantissant que les descriptions de tâches font au moins 10 caractères, que le statut est un booléen et que les dates sont valides. Que ce soit pour ajouter, modifier ou supprimer des tâches, l'application offre une expérience fluide avec des mises à jour en temps réel.",
    },
    github: "https://github.com/FlorianAutricque/exercise/tree/main/16_test_q",
    production: "https://todo-list-api-j4o1.onrender.com/",
    stack: ["All", "React", "CSS", "HTML", "Typescript", "Zod"],
  },
  {
    projectId: 4,
    name: "Natours",
    mainImage: "/projectsImages/natours/image1.webp",
    allImages: Array.from(
      { length: 19 },
      (_, index) => `/projectsImages/natours/image${index + 1}.webp`
    ),
    description: {
      en: "Natours is an app for booking tours. You can sign up (functionality only implemented on the backend). You will receive a welcome email. Then you can log in. To log in as a user and access more features of the app, you can contact me to get user credentials, and then do all the CRUD operations. Once logged in, you can change your photo, change your password, and see your bookings. \nThere are different types of users: regular user, guide, lead-guide, and admin. Admins and lead-guides can add, modify, or delete a tour (implemented on the backend, not the frontend). You can book a tour and pay using Stripe. Once paid, you can access your booking through your account. \nTo pay, you can use a fake credit card: 4242 4242 4242 4242, as the photo below shows. Do not hesitate to contact me to get credentials to test the app. \n Check the 2 last photos below to see all the operation you can do in the backend \n",
      fr: "Natours est une application pour réserver des visites. Vous pouvez vous inscrire (fonctionnalité implémentée uniquement sur le backend). Vous recevrez un e-mail de bienvenue. Ensuite, vous pouvez vous connecter. Pour vous connecter en tant qu'utilisateur et accéder à plus de fonctionnalités de l'application, vous pouvez me contacter pour obtenir des identifiants d'utilisateur, afin de réaliser les opérations CRUD. Une fois connecté, vous pouvez changer votre photo, changer votre mot de passe et voir vos réservations. \n Il existe différents types d'utilisateurs : utilisateur régulier, guide, guide principal et administrateur. Les administrateurs et les guides principaux peuvent ajouter, modifier ou supprimer une visite (implémenté sur le backend, pas sur le frontend). Vous pouvez réserver une visite et payer avec Stripe. Une fois payé, vous pouvez accéder à votre réservation via votre compte. \nPour payer, vous pouvez utiliser une fausse carte de crédit : 4242 4242 4242 4242, comme le montre la photo ci-dessous. N'hésitez pas à me contacter pour obtenir des identifiants pour tester l'application. \n Vous pouvez regarder les 2 dernières images afin de voir toutes les opérations réalisables au niveau du backend",
    },
    API: "https://documenter.getpostman.com/view/35323521/2sA3XTfLAt",
    github:
      "https://github.com/FlorianAutricque/NodeJS_Course/tree/main/natours",
    production: "https://natours-floran-node.onrender.com/",
    stack: [
      "All",
      "NodeJS",
      "CSS",
      "Pug",
      "Stripe",
      "MongoDB",
      "Mongoose",
      "Postman",
    ],
  },
  {
    projectId: 5,
    name: "Photo & Weather",
    mainImage: "/projectsImages/weatherImage/wi3.webp",
    allImages: Array.from(
      { length: 5 },
      (_, index) => `/projectsImages/weatherImage/wi${index + 1}.webp`
    ),
    description: {
      en: "Check the weather anywhere in the world and retrieve an image of the location you are searching for.  \nIf the location doesn't exist, you will receive an error message. Similarly, if the app can't find an image, an error message will be displayed",
      fr: "Vérifiez la météo n'importe où dans le monde et obtenez une image de l'endroit que vous recherchez. \nSi l'emplacement n'existe pas, vous recevrez un message d'erreur. De même, si l'application ne peut pas trouver une image, un message d'erreur sera affiché.",
    },
    github:
      "https://github.com/FlorianAutricque/exercise/tree/main/02%20Weather",
    production: "https://weather-image-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 6,
    name: "The Ultimate Useless Game",
    mainImage: "/projectsImages/uselessGame/uselessGame_1.webp",
    allImages: Array.from(
      { length: 3 },
      (_, index) => `/projectsImages/uselessGame/uselessGame_${index + 1}.webp`
    ),
    description: {
      en: "Play the most useless game ever created. Done to play with fetching random images with an API. \n There is a suprise at some point !",
      fr: "Jouez avec le jeu le plus inutile au monde. Fait dans le but de pratiquer le fetch d'images aléatoires via un API. \n Il y a une surprise à un moment !",
    },
    github:
      "https://github.com/FlorianAutricque/exercise/tree/main/08%20image_choice",
    production: "https://the-ultimate-useless-game.netlify.app/",
    stack: ["All", "CSS", "HTML", "Javascript"],
  },
  {
    projectId: 7,
    name: "GymRat",
    mainImage: "/projectsImages/gymrat/gymrat1.webp",
    allImages: Array.from(
      { length: 8 },
      (_, index) => `/projectsImages/gymrat/gymrat${index + 1}.webp`
    ),
    description: {
      en: "GymRat is a showcase website dedicated to a fictional gym.\n It highlights various offers, new features, and available equipment, while also providing a Body Mass Index (BMI) calculator and other practical features.\n With a user-friendly interface, visitors can explore the services offered by the gym, stay updated on the latest fitness trends, discover available facilities, and even assess their own health index.",
      fr: "GymRat est un site vitrine dédié à une salle de sport fictive.\n Il met en avant les différentes offres, les nouveautés et les équipements disponibles, tout en proposant un calculateur de l'Indice de Masse Corporelle (IMC) et d'autres fonctionnalités pratiques.\n Grâce à une interface conviviale, les visiteurs peuvent explorer les services offerts par la salle, rester à jour sur les dernières tendances en matière de fitness, découvrir les installations disponibles et même évaluer leur propre indice de santé.",
    },
    github: "https://github.com/FlorianAutricque/exercise/tree/main/04%20Gym",
    production: "https://gymrat-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 8,
    name: "Space login",
    mainImage: "/projectsImages/spacelogin/login1.webp",
    allImages: Array.from(
      { length: 7 },
      (_, index) => `/projectsImages/spacelogin/login${index + 1}.webp`
    ),
    description: {
      en: "Space Login is a simulated login experience with a sleek design featuring a dynamic space background. To enhance security, certain criteria like password character count and email format must be met. \n Users can choose to either log in or sign up, with both processes adhering to the specified security measures. Upon successful sign-up, a brief celebratory message is displayed and fades after 3 seconds, seamlessly returning to the login page. Once logged in, a success message confirms your entry into the platform.",
      fr: "Space Login propose une expérience de connexion simulée avec un design fun mettant en avant un fond spatial animé. Pour renforcer la sécurité, certaines conditions doivent être remplies, comme le nombre de caractères du mot de passe et le format de l'adresse e-mail. \n Les utilisateurs peuvent choisir de se connecter ou de s'inscrire, les deux processus respectant les mesures de sécurité spécifiées. Après une inscription réussie, un bref message de célébration s'affiche et disparaît après 3 secondes, revenant ainsi en douceur à la page de connexion. Une fois connecté, un message de succès confirme votre accès à la plateforme.",
    },
    github:
      "https://github.com/FlorianAutricque/exercise/tree/main/01%20React%20form",
    production: "https://login-space-form-flo.netlify.app/",
    stack: ["All", "Javascript", "CSS", "HTML", "React"],
  },

  {
    projectId: 9,
    name: "Portfolio",
    mainImage: "/projectsImages/portfolio/portfolio1.webp",

    allImages: Array.from(
      { length: 15 },
      (_, index) => `/projectsImages/portfolio/portfolio${index + 1}.webp`
    ),
    description: {
      en: "My portfolio is an integral part of my projects, featuring a minimalist homepage. Visitors will first encounter a clean and simple interface, offering key information and some intriguing fun facts. As they delve deeper, they'll find details about my experiences as they scroll down. Additionally, all of my projects are showcased, easily filterable by stack. \n Each project entry provides a glimpse into the technologies used, a comprehensive description, a GitHub link to explore the code, and a carousel to view project-related photos. For those seeking to connect or inquire further, there's a designated contact section. Here, visitors can access my LinkedIn and GitHub profiles, as well as reach out via email.",
      fr: "Mon portfolio est une partie intégrante de mes projets, présentant une page d'accueil épurée. Les visiteurs découvriront d'abord une interface propre et simple, offrant des informations clés et quelques faits amusants. En explorant davantage, ils trouveront des détails sur mes expériences à mesure qu'ils font défiler la page. De plus, l'ensemble de mes projets y sont présentés, facilement filtrables par stack. \nChaque fiche de projet donne un aperçu des technologies utilisées, une description complète, un lien GitHub pour explorer le code et un carrousel pour voir des photos liées au projet. Pour ceux qui souhaitent se connecter ou poser des questions supplémentaires, il y a une section de contact dédiée. Ici, les visiteurs peuvent accéder à mes profils LinkedIn et GitHub, ainsi que me contacter par e-mail.",
    },
    github: "https://github.com/FlorianAutricque/portfolio",
    production: "https://fautcq.com",
    stack: ["All", "React", "CSS", "JSX", "Javascript"],
  },
  {
    projectId: 10,
    name: "OUVA",
    mainImage: "/projectsImages/ouva/ouva1.webp",
    allImages: Array.from(
      { length: 5 },
      (_, index) => `/projectsImages/ouva/ouva${index + 1}.webp`
    ),
    description: {
      en: "Introducing OUVA: Your travel companion for seamless trip planning and finding unique experiences.\nCrafted with Ruby on Rails, JavaScript, CSS, and HTML, OUVA simplifies your journey. Discover hidden gems and offbeat adventures with OUVA's intuitive CSS and HTML-designed interface. JavaScript adds interactivity and responsiveness, making planning a breeze.\nOUVA's development journey relies on Git for collaboration and Heroku for reliable performance. Figma's design finesse and Trello's organization ensure a polished user experience.\nExperience travel like never before with OUVA.",
      fr: "Présentation d'OUVA : Votre compagnon de voyage pour une planification sans effort et la découverte d'expériences uniques.\n Conçu avec Ruby on Rails, JavaScript, CSS et HTML, OUVA simplifie votre voyage. Découvrez des trésors cachés et des aventures hors des sentiers battus grâce à l'interface intuitive conçue en CSS et HTML. JavaScript ajoute de l'interactivité et de la réactivité, rendant la planification un jeu d'enfant. \n Le développement d'OUVA repose sur Git pour la collaboration et Heroku pour des performances fiables. La finesse du design de Figma et l'organisation du projet fait en équipe via Trello garantissent une expérience utilisateur soignée. \n Vivez des voyages comme jamais auparavant avec OUVA.",
    },
    github: "https://github.com/etnlg/ouva",
    stack: ["All", "Ruby on rails", "CSS", "HTML", "Stimulus", "Javascript"],
  },
  {
    projectId: 11,
    name: "WorldWise",
    mainImage: "/projectsImages/worldwise/worldwise1.webp",
    allImages: Array.from(
      { length: 11 },
      (_, index) => `/projectsImages/worldwise/worldwise${index + 1}.webp`
    ),
    description: {
      en: "Introducing WorldWise: Your Ultimate Travel Companion.\nExperience seamless travel tracking with the WorldWise app. Explore a variety of features to elevate your adventures. Learn about our offerings, products, and pricing for your travel needs. Log in to access your dedicated account with an interactive world map to tell your travel stories. Easily log your trips on the map with personal anecdotes.\nTrack Countries, Cherish Memories: WorldWise counts the countries you've visited. City Exploration: Dive into cities you've visited with details like visit dates and your impression and access destination history through a quick Wikipedia link. ",
      fr: "Découvrez WorldWise : Votre Compagnon de Voyage Ultime (fictif).\n Explorez le suivi de voyage sans effort avec l'application WorldWise. Découvrez nos fonctionnalités pour enrichir vos aventures, nos produits et nos tarifs. Connectez-vous pour accéder à un compte dédié avec une carte interactive pour partager vos récits de voyage. Enregistrez vos voyages sur la carte avec des anecdotes personnelles. \nSuivi des Pays, Souvenirs Précieux : WorldWise compte les pays visités. Exploration de Villes : Découvrez les villes visitées avec dates, impressions et liens Wikipedia.",
    },
    github: "https://github.com/FlorianAutricque/worldwise",
    // production: "https://worldwise-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },

  {
    projectId: 12,
    name: "Weather App",
    mainImage: "/projectsImages/weatherApp/weatherapp1.webp",
    allImages: Array.from(
      { length: 3 },
      (_, index) => `/projectsImages/weatherApp/weatherapp${index + 1}.webp`
    ),
    description: {
      en: "Explore global weather in real-time. Simply enter a city name to unveil its weather details.\nThis app showcases React's evolution from classes to functions, making it both informative and weather-savvy.",
      fr: "Explorez la météo mondiale en temps réel. Il vous suffit d'entrer le nom d'une ville pour découvrir ses détails météorologiques. \nCette application met en avant l'évolution des classes dans React vers les fonctions, la rendant éducative.",
    },
    github:
      "https://github.com/FlorianAutricque/react_course_challenge/tree/main/09%20Classy%20weather",
    production: "https://classy-weather-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },

  {
    projectId: 13,
    name: "usePopcorn",
    mainImage: "/projectsImages/usepopcorn/usepopcorn1.webp",
    allImages: Array.from(
      { length: 7 },
      (_, index) => `/projectsImages/usepopcorn/usepopcorn${index + 1}.webp`
    ),
    description: {
      en: "Introducing usePopcorn: Your gateway to an enriched movie experience.\nAccess IMDb ratings, descriptions, cast, and more. Rate, track, and manage your collection effortlessly.\nEnjoy graceful error handling and an engaging loader for slower connections.",
      fr: "Présentation de usePopcorn : Votre passerelle vers une expérience cinématographique incroyable. \nAccédez aux évaluations IMDb, aux descriptions, à la distribution, et plus encore. \nNotez, suivez et gérez votre collection sans effort. Profitez d'une gestion élégante des erreurs et d'un chargement captivant pour les connexions plus lentes.",
    },
    github: "https://github.com/FlorianAutricque/usePopcorn",
    // production: "https://usepopcorn-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 14,
    name: "Fast React Pizza",
    mainImage: "/projectsImages/pizzareact/pizzareact1.webp",
    allImages: Array.from(
      { length: 12 },
      (_, index) => `/projectsImages/pizzareact/pizzareact${index + 1}.webp`
    ),
    description: {
      en: "Introducing Fast Pizza React Co.: Your seamless pizza ordering solution.\nEnter your name, explore the menu, and customize your order effortlessly. \nCraft your perfect meal by choosing pizzas and quantities in an intuitive cart interface. \nModify your selections at will for a tailor-made experience. Complete your order with a valid phone number and easy location pinpointing. \nFor a faster delivery, enjoy the 'Priority Order' feature, which you can select during entry or while tracking your order.",
      fr: "Présentation de Fast Pizza React Co. : Votre solution de commande de pizza sans faille. \nEntrez votre nom, explorez le menu et personnalisez votre commande sans effort. \n Composez votre repas parfait en choisissant des pizzas et des quantités dans une interface de panier intuitive. Modifiez vos sélections à votre guise pour une expérience sur mesure. \nFinalisez votre commande avec un numéro de téléphone valide et une localisation facile. \nPour une livraison plus rapide, profitez de la fonction 'Commande Prioritaire', que vous pouvez sélectionner lors de la saisie ou pendant le suivi de votre commande.",
    },
    github:
      "https://github.com/FlorianAutricque/react_course_challenge/tree/main/15%20React%20pizza",
    // production: "https://react-pizza-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX", "Tailwind"],
  },
  {
    projectId: 15,
    name: "React Quizz",
    mainImage: "/projectsImages/reactquizz/quizz1.webp",
    allImages: Array.from(
      { length: 7 },
      (_, index) => `/projectsImages/reactquizz/quizz${index + 1}.webp`
    ),
    description: {
      en: "React Quiz is a quiz application consisting of 15 questions, each offering 4 answer options. \nChoosing the correct answer results in accumulating points that contribute to your total score. Your achieved points are recorded as a high score. \nAt the end of the quiz, you can restart the game to challenge your previous high score. It's a race against time, as you have a 7-minute timer to complete the game successfully; otherwise, the game will conclude.",
      fr: "React Quiz est une application de quiz composée de 15 questions, offrant chacune 4 options de réponse. \nChoisir la réponse correcte vous permet d'accumuler des points qui contribuent à votre score total. Vos points obtenus sont enregistrés en tant que meilleur score. \nÀ la fin du quiz, vous pouvez redémarrer le jeu pour défier votre meilleur score précédent. C'est une course contre la montre, car vous disposez d'une minuterie de 7 minutes pour terminer le jeu avec succès ; sinon, le jeu se terminera.",
    },
    github:
      "https://github.com/FlorianAutricque/react_course_challenge/tree/main/10%20React%20quizz",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 16,
    name: "Far Away",
    mainImage: "/projectsImages/faraway/faraway1.webp",
    allImages: Array.from(
      { length: 8 },
      (_, index) => `/projectsImages/faraway/faraway${index + 1}.webp`
    ),
    description: {
      en: "Introducing Far Away your ultimate travel companion app designed to make packing easy! \nWith Far Away you can efficiently prepare for your trips with ease and precision. Far Away allows you to create a comprehensive packing list with as many items as you need. \nAs you start packing, simply tick off the items on your list to keep track of your progress. You can easily manage your list by deleting items you no longer need, and our smart sorting options help you stay organized. \nSort items by the order of input, alphabetically, or by packing status. Once your journey concludes, clearing your packing list is a breeze. \nFar Away also features a packing calculator to monitor your packing progress.",
      fr: "Présentation de Far Away : Votre application de compagnon de voyage ultime pour simplifier l'emballage !\n Avec Far Away, préparez efficacement vos voyages en toute simplicité. Créez une liste avec les choses que vous voulez prendre pour votre voyage, cochez les articles à mesure que vous les emballez, et triez-les selon vos besoins.\n Une fois le voyage terminé, nettoyez votre liste en un clin d'œil. \nFar Away inclut également une calculatrice d'emballage pour suivre votre progression.",
    },
    github:
      "https://github.com/FlorianAutricque/react_course_challenge/tree/main/05%20travel-list/src",
    // production: "https://far-away-flo.netlify.app/",
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 17,
    name: "Bankist",
    mainImage: "/projectsImages/bankist/bankist1.webp",
    allImages: Array.from(
      { length: 9 },
      (_, index) => `/projectsImages/bankist/bankist${index + 1}.webp`
    ),
    description: {
      en: "Welcome to Banksy, an innovative banking app with elegant design and powerful JavaScript features. \nYou can access the code on GitHub to witness impressive JavaScript effects. Our app offers interactive features, including an engaging navbar with hover effects and smooth fade animations. \nA sticky navbar remains accessible as you scroll. Explore an open modal window for a simulated login experience, and find a discreet cookie message for transparency. \nExperience improved performance with efficient lazy loading of images and smooth scrolling for easy navigation. \nOrganize content with a tabbed interface, and enjoy a dynamic slider for captivating visuals and information presentation.",
      fr: "Bienvenue sur Banksy, une application bancaire innovante au design élégant et aux puissantes fonctionnalités JavaScript. \n  Cette application offre des fonctionnalités interactives, notamment une barre de navigation captivante avec des effets au survol et des animations de fondu en douceur. Une barre de navigation fixe reste accessible lorsque vous faites défiler la page. \n Une fenêtre modale s'ouvre pour se connecter à son compte. Découvrez un message discret sur les cookies pour plus de transparence. Profitez d'une meilleure performance grâce à un lazy loading pour les images et pour défilement fluide pour une navigation plus aisée.",
    },
    github: "https://github.com/FlorianAutricque/Banksy",
    stack: ["All", "Javascript", "CSS", "HTML"],
  },
  {
    projectId: 18,
    name: "Forkify",
    mainImage: "/projectsImages/forkify/forkify1.webp",
    allImages: Array.from(
      { length: 11 },
      (_, index) => `/projectsImages/forkify/forkify${index + 1}.webp`
    ),
    description: {
      en: "Forkify is an incredible app with access to 1 million+ online recipes via its API. \nEasily explore diverse dishes with simple ingredient or name searches. There are 10 dishes per pages. \nDiscover a recipe you love? Bookmark it and adjust servings for personalized cooking. Collect as many recipes as you like. Bookmarks stay safe, even after leaving or reloading the page. \nGo a step further by adding private, exclusive recipes only accessible to you.",
      fr: "Forkify est une application incroyable qui donne accès à plus d'un million de recettes en ligne via son API. \n Explorez facilement une grande variété de plats en effectuant des recherches simples par ingrédient ou par nom. Il y a 10 plats par page. \n Vous avez trouvé une recette que vous aimez ? Mettez-la en favori et ajustez les portions pour une cuisson personnalisée.  \nVous pouvez collecter autant de recettes que vous le souhaitez. Les favoris restent en sécurité, même si vous quittez ou rechargez la page. \nPoussez encore plus loin en ajoutant des recettes privées et exclusives, accessibles uniquement par vous.",
    },
    github: "https://github.com/FlorianAutricque/Forkify-App",
    stack: ["All", "Javascript", "CSS", "HTML"],
  },
  {
    projectId: 19,
    name: "Mapty",
    mainImage: "/projectsImages/mapty/mapty1.webp",
    allImages: Array.from(
      { length: 6 },
      (_, index) => `/projectsImages/mapty/mapty${index + 1}.webp`
    ),
    description: {
      en: "Introducing Mapty - Your Personal Workout Tracker! \n Mapty is an app designed to help you track your running and cycling workouts effortlessly. It automatically logs your location. \nTo record your workouts, you just need to click on the map where you did your workout. A card will appear, allowing you to choose between running or cycling and add details like distance, duration, steps per minute (for running), and elevation (for cycling). \nThe app conveniently allows you to access past workouts by clicking on the cards on the left, and your workouts are automatically saved, even if you leave or refresh the page.",
      fr: "Découvrez Mapty - Votre suivi personnel d'entraînement ! \n Mapty est une application conçue pour vous aider à suivre vos séances d'entraînement de course à pied et de vélo. Avec Mapty enregistrez vos emplacements.\n Pour enregistrer vos séances d'entraînement, il vous suffit de cliquer sur la carte à l'endroit où vous avez effectué votre séance. Une box s'affichera, vous permettant de choisir entre la course à pied ou le vélo et d'ajouter des détails tels que la distance, la durée, le nombre de pas par minute (pour la course à pied) et l'élévation (pour le vélo). \nL'application vous permet également d'accéder facilement à vos séances d'entraînement passées en cliquant sur les boxs à gauche, et vos séances sont automatiquement sauvegardées, même si vous quittez ou actualisez la page.",
    },
    github: "https://github.com/FlorianAutricque/Mapty",
    stack: ["All", "Javascript", "CSS", "HTML"],
  },
  {
    projectId: 20,
    name: "Guess My Number",
    mainImage: "/projectsImages/number/number1.webp",
    allImages: Array.from(
      { length: 3 },
      (_, index) => `/projectsImages/number/number${index + 1}.webp`
    ),
    description: {
      en: "Guess my Number is a game that challenges you to guess a number between 1 and 20. \nEach time you make a guess, your score decreases by one. Once you correctly guess the secret number, that becomes your high score.",
      fr: "'Guess my Number' est un jeu qui vous met au défi de deviner un nombre entre 1 et 20. \n À chaque fois que vous faites une supposition, votre score diminue de un. Une fois que vous devinez correctement le nombre secret, cela devient votre meilleur score.",
    },
    github:
      "https://github.com/FlorianAutricque/Javascript-exercise/tree/main/05%20Project%2001:%20Guess%20my%20Number%20",
    stack: ["All", "Javascript", "CSS", "HTML"],
  },
  {
    projectId: 21,
    name: "Pig Game",
    mainImage: "/projectsImages/piggame/game1.webp",
    allImages: Array.from(
      { length: 4 },
      (_, index) => `/projectsImages/piggame/game${index + 1}.webp`
    ),
    description: {
      en: "Pig Game is a two-player game where each player takes turns rolling a dice. \nThe objective is to be the first to reach a score of 100 and win the game. However, if a player rolls a 1, their current score resets to zero. \nPlayers have the option to save their current score by pressing the hold button, which adds the current score to their main score. \nThey can also restart the game at any time by pressing the new game button.",
      fr: "PiGame est un jeu à deux joueurs où chaque joueur tour à tour lance un dé.\n L'objectif est d'être le premier à atteindre un score de 100 et à gagner la partie. \nCependant, si un joueur obtient un 1 en lançant le dé, son score actuel est remis à zéro. Les joueurs ont la possibilité de sauvegarder leur score actuel en appuyant sur le bouton hold, ce qui ajoute le score actuel à leur score principal. \n Ils peuvent également redémarrer le jeu à tout moment en appuyant sur le bouton nouvelle partie.",
    },
    github:
      "https://github.com/FlorianAutricque/Javascript-exercise/tree/main/07%20Project%2003:%20Pig%20Game",
    stack: ["All", "Javascript", "CSS", "HTML"],
  },
  {
    projectId: 22,
    name: "Blog",
    mainImage: "/projectsImages/blog/blog1.webp",
    allImages: Array.from(
      { length: 7 },
      (_, index) => `/projectsImages/blog/blog${index + 1}.webp`
    ),
    description: {
      en: "This project is a blog where I can share articles about web development. It was created using Next.js. You can find articles about Next.js and JavaScript. \n Feel free to ask me any questions. Head to the contact page and send me your inquiries. Your questions will be stored in a MongoDB database.",
      fr: "Ce projet est un blog où je peux partager des articles sur le développement web. Il a été créé à l'aide de Next.js. Vous pouvez trouver des articles sur Next.js et JavaScript. \n N'hésitez pas à me poser des questions. Rendez-vous sur la page de contact et envoyez-moi ce que vous voulez. Vos questions seront stockées dans une base de données MongoDB",
    },
    github: "https://github.com/FlorianAutricque/nextjs/tree/main/07%20Blog",
    stack: ["All", "Javascript", "CSS", "HTML", "NextJS"],
  },

  {
    projectId: 23,
    name: "The Wild Oasis",
    mainImage: "/projectsImages/wildoasis/wildoasis1.webp",
    allImages: Array.from(
      { length: 28 },
      (_, index) => `/projectsImages/wildoasis/wildoasis${index + 1}.webp`
    ),
    description: {
      en: "Introducing Wild Oasis: a hotel management web app for business owners.\nUsers log in for access, with an adaptive design including dark mode.\nYou will find; the home page: Insights on bookings, sales, check-ins, and occupancy rates. Booking page: View, check-in, and manage bookings. Cabins page: Explore and add cabins. Users page: Manage colleague access. Settings page: Update cabin and booking info.\n Data stored in Supabase.\n USE: email address: flo@example.com password: 123456",
      fr: "Présentation de Wild Oasis : une application web de gestion hôtelière pour les propriétaires d'entreprise. \nLes utilisateurs se connectent pour accéder, avec un design adaptatif incluant un mode sombre.\n Vous trouverez ; la page d'accueil : Des informations sur les réservations, les ventes, les enregistrements et les taux d'occupation. Page de réservation : Afficher, enregistrer et gérer les réservations. Page des cabanes : Explorer et ajouter des cabanes. Page des utilisateurs : Gérer l'accès des collègues. Page des paramètres : Mettre à jour les informations sur les cabanes et les réservations. \nLes données sont stockées dans Supabase. USE: adresse mail : flo@example.com mot de passe: 123456",
    },
    github:
      "https://github.com/FlorianAutricque/the-wild-oasis/tree/main/wild-oasis",
    // production: "https://wild-oasis-flo.netlify.app",
    stack: ["All", "React", "CSS", "HTML", "Supabase", "JSX"],
  },
  {
    projectId: 24,
    name: "Hairbnb",
    mainImage: "/projectsImages/hairbnb/airbnb1.webp",
    allImages: Array.from(
      { length: 8 },
      (_, index) => `/projectsImages/hairbnb/airbnb${index + 1}.webp`
    ),
    description: {
      en: "Introducing Hairbnb: Your destination for renting stunning wigs!\nWe've blended Ruby on Rails, JavaScript, CSS, and HTML for an intuitive experience. Git ensures smooth collaboration.\nOur captivating user interfaces, crafted in Figma, offer a visually stunning and user-friendly design. Trello keeps us organized, delivering Hairbnb with precision.\nExplore chic bobs, wild curly afros, or elegant updos. Hairbnb has the perfect wig for any occasion. Try our 'Owner' mode to rent out your wig and approve rental requests.\nExperience Hairbnb and unlock a world of wig possibilities.",
      fr: "Présentation de Hairbnb : Votre site pour la location de perruques époustouflantes copiant le principe de Airbnb !\n Nous avons associé Ruby on Rails, JavaScript, CSS et HTML pour une expérience intuitive. Git garantit une collaboration fluide. \nNos interfaces utilisateur captivantes, créées avec Figma, offrent un design visuellement époustouflant et convivial. Trello nous permet de rester organisés et de livrer Hairbnb avec précision. \nExplorez les chic bobs, les boucles folles afro ou les élégantes coiffures relevées. Hairbnb a la perruque parfaite pour chaque occasion. Essayez notre mode 'Propriétaire' pour louer votre perruque et approuver les demandes de location. \nDécouvrez Hairbnb et débloquez un monde de possibilités en matière de perruques.",
    },
    github: "https://github.com/etnlg/hairbnb-1208",
    stack: ["All", "Ruby on rails", "CSS", "HTML", "Stimulus", "Javascript"],
  },
];

export default projects;
