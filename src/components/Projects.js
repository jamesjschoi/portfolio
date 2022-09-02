import dummy from '../assets/dummy-image.png';
import movie from '../assets/multidevice-movie.png';
import portfolio from '../assets/multidevice-portfolio.png';
import dropdown from '../assets/dropdown.png';
import weatherapp from '../assets/multidevice-weatherapp.png';
import honeyoat from '../assets/multidevice-honey.png';

export const Projects = [
  {
    id: 0,
    name: 'Honey Oat',
    slug: 'honey-oat',
    tags: ['WordPress', 'Javascript', 'SCSS', 'PHP'],
    main: 'WordPress',
    image: dummy,
    category: 'Static',

    headerImage: honeyoat,
    type: 'WordPress WooCommerce',
    duration: '4 weeks',
    team: 'James Choi, Ben Huang, Amy Liu, Omer Akdogan',
    involvement: '100% in design and development',
    tools: 'WordPress, SASS, Gulp, PHP, GitHub, Asana',
    responsiveness: 'Mobile, Tablet, Desktop',
    description:
      'HoneyOat is a sandwich store that I collaborated with 3 other developers to develop a custom theme template on WordPress WooCommerce.',

    github: 'https://github.com/jamesjschoi',
    live: 'https://jschoi.ca/honeyoat',

    overview:
      'Honey Oat is a static WordPress website that incorporates the WooCommerce plugin to enable online transactions on various products. A fictional business, named Honey Oat, is created to replicate real life implication of desigining and creating an e-commerce website for a company. Custom post types and taxonomies, as well as Advanced Custom Fields (ACF) are used to make and display consistent contents across all pages.',

    takeaway:
      'Although there were some challenges on using PHP and calling WooCommerce hooks to manipulate what is to be displayed and what is not, the main takeaway is the expereince of working with other developers. Without consistent meetings and follow-ups with the group members, it would be easy to get lost with what is going on. I learned the importance of version control with Git, the siginificance of updating the tasks with Asana and constantly reminding the members on the progress of the deliverables.',
  },

  {
    id: 1,
    name: 'Movie Galaxy',
    slug: 'movie-galaxy',
    tags: ['React.js', 'SCSS', 'API'],
    main: 'React.js',
    image: dummy,
    category: 'Dynamic',

    headerImage: movie,
    type: 'Movie Database',
    duration: '2 weeks',
    team: 'James Choi',
    involvement: '100% in design and development',
    tools: 'React, TMDB API, SASS, GitHub, Photoshop',
    responsiveness: 'Mobile, Tablet, Desktop',
    description:
      'Developed by React.js, it is a movie listing web application that users can search and store as many favourite movies as they wish.',

    github: 'https://github.com/jamesjschoi/movie-galaxy',
    live: 'https://jschoi.ca/movie-galaxy',

    overview:
      'Movie Galaxy is a movie listing web application that uses TMDB API to collect real time data on each and every movie out there. In planning phase, both low and high fidelity mockups were created, which then got transformed into a fully functioning website using React and SASS. The application features functions like saving and deleting favourite movies, searching and showing live results and finally sorting movies based on four categories: popular, top rated, now playing and upcoming.',

    takeaway:
      'This was the first big project that I have made with React and I have become more comfortable with writing codes in React syntax. I acquired clearer grasp of JavaScript functions and React hooks like useState, useReducer, useContext and useEffect. The biggiest take away is gaining knowledge in fetching REST API and using and manipulating the data to display contents that focus on positive user experience.',
  },

  {
    id: 2,
    name: 'Portfolio',
    slug: 'portfolio',
    tags: ['React.js', 'SCSS'],
    main: 'React.js',
    image: dummy,
    category: 'Static',

    headerImage: portfolio,
    type: 'Personal Portfolio',
    duration: '2 weeks',
    team: 'James Choi',
    involvement: '100% in design and development',
    tools: 'React, SASS, GitHub, Photoshop, Adobe XD',
    responsiveness: 'Mobile, Tablet, Desktop',
    description:
      'This is the website you are on at the moment and it is developed to showcase my skills and projects.',

    github: 'https://github.com/jamesjschoi/',
    live: 'https://jschoi.ca',

    overview:
      'Portfolio is created to showcase my skills and abilities through my real life works in an alternative form to plain resume that comes with endless texts. It is designed with Adobe Photoshop and XD then created and deployed with React. I used all the fundamentals I learned from creating a movie database application on this project and as an avid follower of saying "less is more", I attempted to convey simple and clean structure and design with my portfolio.',

    takeaway:
      'While I was excited to showcase what I have learned through my 6 month journey into web development, I came to realize that this project was very time-consuming. I learned that, in order to be efficient with work, not only do you need to be competent coder but also you need to have clear design and prototype in mind to produce an effective outcome in a timely manner. I had original prototype made in Adobe XD but as I worked on my portfolio, I added more features and changed the design structure to be fit in more aethestical way. It might have been better to put in more time in the desining process until I was 100% satisfied with the project, then proceed with producing the deliverables and stick with the plan. Overall, it was a fun experience and I cannot wait to upgrade my portfolio to a next step with more years of experience under my belt in few years.',
  },

  {
    id: 3,
    name: 'Weather App',
    slug: 'weather-app',
    tags: ['React.js', 'SCSS'],
    main: 'React.js',
    image: dummy,
    category: 'App',

    headerImage: weatherapp,
    type: 'Web Application',
    duration: '1 week',
    team: 'James Choi',
    involvement: '100% in design and development',
    tools: 'React, CSS, API',
    responsiveness: 'Mobile, Tablet, Desktop',
    description:
      'Weather app is developed with React.js and the user can search all cities around the globe to access the weather information.',

    github: 'https://github.com/jamesjschoi/weather-app',
    live: 'https://jschoi.ca/weather-app',

    overview:
      'This is a simple web application that fetches API from OpenWeatherMap to display live time weather information and forecast on whichever city a user searches for, as well as a dynamic background image that changes according to different type of weather the screen displays. It is created and deployed by React, then styled by CSS.',

    takeaway: '',
  },

  //   {
  //     id: 4,
  //     name: 'Dropdown Menu',
  //     slug: 'dropdown-menu',
  //     tags: ['HTML5', 'CSS', 'JavaScript'],
  //     main: 'JavaScript',
  //     image: dummy,
  //     category: 'Static',

  //     headerImage: dropdown,
  //     type: 'Website Challenge',
  //     duration: '1 day',
  //     team: 'James Choi',
  //     involvement: '100% in development',
  //     tools: 'HTML5, CSS, JavaScript',
  //     responsiveness: 'Mobile, Desktop',
  //     description:
  //       'One of the challenges by frontendmentor.io to develop responsive website with intro section and dropdown menu.',

  //     github: 'https://github.com/jamesjschoi/dropdown-navigation',
  //     live: 'https://jschoi.ca/fm-challenge-one/index.html',

  //     overview:
  //       'This is the challenge from frontendmentor.io. Based on the initial design template, I needed to create the whole website from scratch from HTML to CSS and JavaScript. It was a neat challenge to remind myself of some vanilla JavaScript techniques like addEventListners and classLists',

  //     takeaway: '',
  //   },
];
