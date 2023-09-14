const projects = [
  {
    projectId: 1,
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
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 2,
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
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 3,
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
    projectId: 4,
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
  {
    projectId: 5,
    name: "The Wild Oasis",
    mainImage: "/projectsImages/wildoasis/wildoasis1.webp",
    allImages: Array.from(
      { length: 28 },
      (_, index) => `/projectsImages/wildoasis/wildoasis${index + 1}.webp`
    ),
    description: {
      en: "Introducing Wild Oasis: a hotel management web app for business owners.\nUsers log in for access, with an adaptive design including dark mode.\nYou will find; the home page: Insights on bookings, sales, check-ins, and occupancy rates. Booking page: View, check-in, and manage bookings. Cabins page: Explore and add cabins. Users page: Manage colleague access. Settings page: Update cabin and booking info.\n Data stored in Supabase.",
      fr: "Présentation de Wild Oasis : une application web de gestion hôtelière pour les propriétaires d'entreprise. \nLes utilisateurs se connectent pour accéder, avec un design adaptatif incluant un mode sombre.\n Vous trouverez ; la page d'accueil : Des informations sur les réservations, les ventes, les enregistrements et les taux d'occupation. Page de réservation : Afficher, enregistrer et gérer les réservations. Page des cabanes : Explorer et ajouter des cabanes. Page des utilisateurs : Gérer l'accès des collègues. Page des paramètres : Mettre à jour les informations sur les cabanes et les réservations. \nLes données sont stockées dans Supabase.",
    },
    github:
      "https://github.com/FlorianAutricque/the-wild-oasis/tree/main/wild-oasis",
    stack: ["All", "React", "CSS", "HTML", "Supabase", "JSX"],
  },
  {
    projectId: 6,
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
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 7,
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
    stack: ["All", "React", "CSS", "HTML", "JSX", "Tailwind"],
  },
  {
    projectId: 8,
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
    projectId: 9,
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
    stack: ["All", "React", "CSS", "HTML", "JSX"],
  },
  {
    projectId: 10,
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
    projectId: 11,
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
    projectId: 12,
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
    projectId: 13,
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
    projectId: 14,
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
];

export default projects;
