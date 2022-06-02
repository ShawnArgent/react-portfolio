import React from 'react';
import './Projects.css';
import Quiz from '../../images/quiz.png';
import Weather from '../../images/weather-dashboard.png';
import Planner from '../../images/day_planner.png';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <span style>Projects</span>

      <img src={Quiz} alt="" />

      <img src={Weather} alt="" />

      <img src={Planner} alt="" />
    </div>
  );
};

export default Projects;
