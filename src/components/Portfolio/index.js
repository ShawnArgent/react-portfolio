
import React, { useState } from 'react';
import Project from '../Project';


function Portfolio() {
  
const [projects] = useState([
  {
    name: 'project-java',
    image: '../../assets/projects/project-java.jpg',
    description: 'MERN Stack',
    link: 'https://vast-woodland-79628.herokuapp.com/',
    repo: 'https://github.com/ShawnArgent/project-java'
  },
  {
    name: 'git-fit',
    image: '../../assets/projects/git-fit.jpg',
    description: 'JavaScript, Handlebars, MySql',
    link: 'https://peaceful-dusk-53929.herokuapp.com/',
    repo: 'https://github.com/ShawnArgent/Git-Fit'
  },
  {
    name: 'market-finder',
    image: '../../assets/projects/market-finder.jpg',
    description: 'HTML, CSS, JavaScript, API',
    link: 'https://mrmrc182.github.io/farm-market-finder/',
    repo: 'https://github.com/ShawnArgent/farm-market-finder'
  },
  {
    name: 'day-planner',
    image: '../../assets/projects/day-planner.jpg',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/day-planner/',
    repo: 'https://github.com/ShawnArgent/day-planner'
  },
  {
    name: 'password-generator',
    image: '../../assets/projects/password-generator.jpg',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/js-password-gen/',
    repo: 'https://github.com/ShawnArgent/js-password-gen'
  },
  {
    name: 'js-quiz',
    image: '../../assets/projects/js-quiz.jpg',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/Java-Quiz-Code',
    repo: 'https://github.com/ShawnArgent/Java-Quiz-Code'
  },
  {
    name: 'weather-dashboard',
    image: '../../assets/projects/weather-dashboard.jpg',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/weather-dashboard/',
    repo: 'https://github.com/ShawnArgent/weather-dashboard'
  },
  {
    name: 'team-profile',
    image: '../../assets/projects/team-profile.jpg',
    description: 'JS, HTML, Node, Inquirer, Jest',
    link: 'https://youtu.be/Cf001jGUMO8',
    repo: 'https://github.com/ShawnArgent/team-profile-generator'
  },
  {
    name: 'text-editor',
    image: '../../assets/projects/text-editor.jpg',
    description: 'JavaScript, Express, Heroku',
    link: 'https://nameless-wildwood-89668.herokuapp.com/',
    repo: 'https://github.com/ShawnArgent/pwa-text-editor'
  },
  {
    name: 'note-taker',
    image: '../../assets/projects/note-taker.jpg',
    description: 'JavaScript, Express, Bootstrap, Heroku',
    link: 'https://agile-inlet-32626.herokuapp.com/',
    repo: 'https://github.com/ShawnArgent/express.js-note-taker'
  },
]);

return (
  <div>
    <div className="flex-row">
      {projects.map((project, idx) => (
        <Project
          project={project}
          key={'project' + idx}
        />
      ))}
    </div>
  </div>
);
};

export default Portfolio;

