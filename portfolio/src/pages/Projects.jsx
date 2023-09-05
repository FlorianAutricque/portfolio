import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Projects.module.css";
import styles2 from "../components/SizeBox.module.css";
import Box from "../components/Box";
import styles3 from "../components/PageNav.module.css";

function Projects() {
  const projects = [
    {
      projectId: 1,
      name: "WorldWise",
      mainImage: "/projectsImages/worldwise/worldwise1.png",
      allImages: Array.from(
        { length: 11 },
        (_, index) => `/projectsImages/worldwise/worldwise${index + 1}.png`
      ),
      description:
        "Introducing WorldWise: Your Ultimate Travel Companion. Experience seamless travel tracking with the WorldWise app. Explore a variety of features to elevate your adventures. Learn about our offerings, products, and pricing for your travel needs. Log in to access your dedicated account with an interactive world map to tell your travel stories. Easily log your trips on the map with personal anecdotes. Track Countries, Cherish Memories: WorldWise counts the countries you've visited. ity Exploration: Dive into cities you've visited with details like visit dates and your impression. Access destination history through a quick Wikipedia link. ",
      github: "https://github.com/FlorianAutricque/worldwise",
      stack: ["React", "CSS", "HTML", "JSX"],
    },
    {
      projectId: 2,
      name: "Weather App",
      mainImage: "/projectsImages/weatherApp/weatherapp1.png",
      allImages: Array.from(
        { length: 3 },
        (_, index) => `/projectsImages/weatherApp/weatherapp${index + 1}.png`
      ),
      description:
        "Explore global weather in real-time. Simply enter a city name to unveil its weather details. This app showcases React's evolution from classes to functions, making it both informative and weather-savvy.",
      github:
        "https://github.com/FlorianAutricque/react_course_challenge/tree/main/09%20Classy%20weather",
      stack: ["React", "CSS", "HTML", "JSX"],
    },
    {
      projectId: 3,
      name: "OUVA",
      mainImage: "/projectsImages/ouva/ouva1.png",
      allImages: Array.from(
        { length: 5 },
        (_, index) => `/projectsImages/ouva/ouva${index + 1}.png`
      ),
      description:
        "Introducing OUVA: Your travel companion for seamless trip planning and unique experiences. Crafted with Ruby on Rails, JavaScript, CSS, and HTML, OUVA simplifies your journey. Discover hidden gems and offbeat adventures with OUVA's intuitive CSS and HTML-designed interface. JavaScript adds interactivity and responsiveness, making planning a breeze. OUVA's development journey relies on Git for collaboration and Heroku for reliable performance. Figma's design finesse and Trello's organization ensure a polished user experience. Experience travel like never before with OUVA, your ultimate trip planner.",
      github: "https://github.com/etnlg/ouva",
      stack: ["ruby on rails", "CSS", "HTML", "Stimulus", "Javascript"],
    },
    {
      projectId: 4,
      name: "Hairbnb",
      mainImage: "/projectsImages/hairbnb/airbnb1.png",
      allImages: Array.from(
        { length: 8 },
        (_, index) => `/projectsImages/hairbnb/airbnb${index + 1}.png`
      ),
      description:
        "Introducing Hairbnb: Your destination for renting stunning wigs! We've blended Ruby on Rails, JavaScript, CSS, and HTML for an intuitive experience. Git ensures smooth collaboration, and Heroku guarantees reliability. Our captivating user interfaces, crafted in Figma, offer a visually stunning and user-friendly design. Trello keeps us organized, delivering Hairbnb with precision. Explore chic bobs, wild curly afros, or elegant updos. Hairbnb has the perfect wig for any occasion. Try our 'Owner' mode to rent out your wig and approve rental requests.       Experience Hairbnb and unlock a world of wig possibilities.",
      github: "https://github.com/etnlg/hairbnb-1208",
      stack: ["ruby on rails", "CSS", "HTML", "Stimulus", "Javascript"],
    },
    {
      projectId: 5,
      name: "The Wild Oasis",
      mainImage: "/projectsImages/wildoasis/wildoasis1.png",
      allImages: Array.from(
        { length: 28 },
        (_, index) => `/projectsImages/wildoasis/wildoasis${index + 1}.png`
      ),
      description:
        "Introducing Wild Oasis: a hotel management web app for business owners. Users log in for access, with an adaptive design including dark mode. You will find; the home page: Insights on bookings, sales, check-ins, and occupancy rates. Booking page: View, check-in, and manage bookings. Cabins page: Explore and add cabins. Users page: Manage colleague access. Settings page: Update cabin and booking info. Data stored in Supabase.",
      github:
        "https://github.com/FlorianAutricque/the-wild-oasis/tree/main/wild-oasis",
      stack: ["React", "CSS", "HTML", "Supabase"],
    },
    {
      projectId: 6,
      name: "usePopcorn",
      mainImage: "/projectsImages/usepopcorn/usepopcorn1.png",
      allImages: Array.from(
        { length: 7 },
        (_, index) => `/projectsImages/usepopcorn/usepopcorn${index + 1}.png`
      ),
      description:
        "Introducing usePopcorn: Your gateway to an enriched movie experience. Access IMDb ratings, descriptions, cast, and more. Rate, track, and manage your collection effortlessly. Enjoy graceful error handling and an engaging loader for slower connections.",
      github: "https://github.com/FlorianAutricque/usePopcorn",
      stack: ["React", "CSS", "HTML", "JSX"],
    },
    {
      projectId: 7,
      name: "Fast React Pizza",
      mainImage: "/projectsImages/pizzareact/pizzareact1.png",
      allImages: Array.from(
        { length: 12 },
        (_, index) => `/projectsImages/pizzareact/pizzareact${index + 1}.png`
      ),
      description:
        "Introducing Fast Pizza React Co.: Your seamless pizza ordering solution. Enter your name, explore the menu, and customize your order effortlessly. Craft your perfect meal by choosing pizzas and quantities in an intuitive cart interface. Modify your selections at will for a tailor-made experience. Complete your order with a valid phone number and easy location pinpointing. For a faster delivery, enjoy the 'Priority Order' feature, which you can select during entry or while tracking your order.",
      github:
        "https://github.com/FlorianAutricque/react_course_challenge/tree/main/15%20React%20pizza",
      stack: ["React", "CSS", "HTML", "JSX", "Tailwind"],
    },
    {
      projectId: 8,
      name: "React Quizz",
      mainImage: "/projectsImages/reactquizz/quizz1.png",
      allImages: Array.from(
        { length: 7 },
        (_, index) => `/projectsImages/reactquizz/quizz${index + 1}.png`
      ),
      description:
        "React Quiz is a quiz application consisting of 15 questions, each offering 4 answer options. Choosing the correct answer results in accumulating points that contribute to your total score. Your achieved points are recorded as a high score. At the end of the quiz, you can restart the game to challenge your previous high score. It's a race against time, as you have a 7-minute timer to complete the game successfully; otherwise, the game will conclude.",
      github:
        "https://github.com/FlorianAutricque/react_course_challenge/tree/main/10%20React%20quizz",
      stack: ["React", "CSS", "HTML", "JSX"],
    },
    {
      projectId: 9,
      name: "Far Away",
      mainImage: "/projectsImages/faraway/faraway1.png",
      allImages: Array.from(
        { length: 8 },
        (_, index) => `/projectsImages/faraway/faraway${index + 1}.png`
      ),
      description:
        "Introducing Far Away your ultimate travel companion app designed to make packing easy! With Far Away you can efficiently prepare for your trips with ease and precision. Far Away allows you to create a comprehensive packing list with as many items as you need. As you start packing, simply tick off the items on your list to keep track of your progress. You can easily manage your list by deleting items you no longer need, and our smart sorting options help you stay organized. Sort items by the order of input, alphabetically, or by packing status. Once your journey concludes, clearing your packing list is a breeze. Far Away also features a packing calculator to monitor your packing progress.",
      github:
        "https://github.com/FlorianAutricque/react_course_challenge/tree/main/05%20travel-list/src",
      stack: ["React", "CSS", "HTML", "JSX"],
    },
    {
      projectId: 10,
      name: "Bankist",
      mainImage: "/projectsImages/bankist/bankist1.png",
      allImages: Array.from(
        { length: 9 },
        (_, index) => `/projectsImages/bankist/bankist${index + 1}.png`
      ),
      description:
        "Welcome to Banksy, an innovative banking app with elegant design and powerful JavaScript features. You can access the code on GitHub to witness impressive JavaScript effects. Our app offers interactive features, including an engaging navbar with hover effects and smooth fade animations. A sticky navbar remains accessible as you scroll. Explore an open modal window for a simulated login experience, and find a discreet cookie message for transparency. Experience improved performance with efficient lazy loading of images and smooth scrolling for easy navigation. Organize content with a tabbed interface, and enjoy a dynamic slider for captivating visuals and information presentation.",
      github: "https://github.com/FlorianAutricque/Banksy",
      stack: ["Javascript", "CSS", "HTML"],
    },
    {
      projectId: 11,
      name: "Forkify",
      mainImage: "/projectsImages/forkify/forkify1.png",
      allImages: Array.from(
        { length: 12 },
        (_, index) => `/projectsImages/forkify/forkify${index + 1}.png`
      ),
      description:
        "Forkify is an incredible app with access to 1 million+ online recipes via its API. Easily explore diverse dishes with simple ingredient or name searches. There are 10 dishes per pages. Discover a recipe you love? Bookmark it and adjust servings for personalized cooking. Collect as many recipes as you like. Bookmarks stay safe, even after leaving or reloading the page. Go a step further by adding private, exclusive recipes only accessible to you.",
      github: "https://github.com/FlorianAutricque/Forkify-App",
      stack: ["Javascript", "CSS", "HTML"],
    },
    {
      projectId: 12,
      name: "Mapty",
      mainImage: "/projectsImages/mapty/mapty1.png",
      allImages: Array.from(
        { length: 6 },
        (_, index) => `/projectsImages/mapty/mapty${index + 1}.png`
      ),
      description:
        "Introducing Mapty - Your Personal Workout Tracker! Mapty is an app designed to help you track your running and cycling workouts effortlessly. It automatically logs your location. To record your workouts, you just need to click on the map where you did your workout. A card will appear, allowing you to choose between running or cycling and add details like distance, duration, steps per minute (for running), and elevation (for cycling). The app conveniently allows you to access past workouts by clicking on the cards on the left, and your workouts are automatically saved, even if you leave or refresh the page.",
      github: "https://github.com/FlorianAutricque/Mapty",
      stack: ["Javascript", "CSS", "HTML"],
    },
    {
      projectId: 13,
      name: "Guess My Number",
      mainImage: "/projectsImages/number/number1.png",
      allImages: Array.from(
        { length: 3 },
        (_, index) => `/projectsImages/number/number${index + 1}.png`
      ),
      description:
        "Guess my Number is a game that challenges you to guess a number between 1 and 20. Each time you make a guess, your score decreases by one. Once you correctly guess the secret number, that becomes your high score. You can play again to try and beat your high score.",
      github:
        "https://github.com/FlorianAutricque/Javascript-exercise/tree/main/05%20Project%2001:%20Guess%20my%20Number%20",
      stack: ["Javascript", "CSS", "HTML"],
    },
    {
      projectId: 14,
      name: "Pig Game",
      mainImage: "/projectsImages/piggame/game1.png",
      allImages: Array.from(
        { length: 4 },
        (_, index) => `/projectsImages/piggame/game${index + 1}.png`
      ),
      description:
        "Pig Game is a two-player game where each player takes turns rolling a dice. The objective is to be the first to reach a score of 100 and win the game. However, if a player rolls a 1, their current score resets to zero. Players have the option to save their current score by pressing the hold button, which adds the current score to their main score. They can also restart the game at any time by pressing the new game button.",
      github:
        "https://github.com/FlorianAutricque/Javascript-exercise/tree/main/07%20Project%2003:%20Pig%20Game",
      stack: ["Javascript", "CSS", "HTML"],
    },
  ];

  return (
    <div>
      <PageNav />

      <h1>List of projects</h1>

      <div className={styles.containerProjects}>
        {projects.map(project => (
          <NavLink
            key={project.projectId}
            to={`/project/${project.projectId}`}
            state={{ projectData: project }}
            className={styles3.active}
          >
            <div>
              <Box size1={styles2.sizeProject}>
                {project.name}
                {project.mainImage && (
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className={styles.img}
                  />
                )}
              </Box>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Projects;
