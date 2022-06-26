
import React, { useState } from 'react';
import Project from "../Project/Project";


function Portfolio() {
  
const [projects] = useState([
  {
    name: 'password-generator',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/js-password-gen/',
    repo: 'https://github.com/ShawnArgent/js-password-gen'
  },
  {
    name: 'day-planner',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/day-planner/',
    repo: 'https://github.com/ShawnArgent/day-planner'
  },
  {
    name: 'js-quiz',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/Java-Quiz-Code',
    repo: 'https://github.com/ShawnArgent/Java-Quiz-Code'
  },
  {
    name: 'weather-dashboard',
    description: 'HTML, CSS, JavaScript',
    link: 'https://shawnargent.github.io/weather-dashboard/',
    repo: 'https://github.com/ShawnArgent/weather-dashboard'
  },
  {
    name: 'market-finder',
    description: 'HTML, CSS, JavaScript',
    link: 'https://mrmrc182.github.io/farm-market-finder/',
    repo: 'https://github.com/ShawnArgent/farm-market-finder'
  },
  {
    name: 'git-fit',
    description: 'JavaScript, Handlebars, MySql',
    link: 'https://peaceful-dusk-53929.herokuapp.com/',
    repo: 'https://github.com/ShawnArgent/Git-Fit'
  },
]);

return (
  <div>
    <div className="flex-row">
      {projects.map((project, idx) => (
        <Project
          project={project}
          key={"project" + idx}
        />
      ))}
    </div>
  </div>
);
};

export default Portfolio;

