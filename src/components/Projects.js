import React from 'react';
import './Projects.css';
import Quiz from '../images/quiz.png';
import Weather from '../images/weather-dashboard.png';
import Planner from '../images/day_planner.png';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <span className>Projects</span>

      <div className="row">
        <div className="col-lg-2 text-center">
          <div className="card">
            <a href="https://shawnargent.github.io/js-password-gen/">
              <h4 className="card-header">
                Password Generator
                <button type="button" className="btn btn-secondary btn-sm">
                  DEMO
                </button>
              </h4>
              <img src="./assets/images/shawnargent.github.io_js-password-gen_.png" className="card-img-top" alt="password generator example" />
            </a>
            <article className="card-text">HTML, CSS, JS</article>
            <a className="links repo" href="https://github.com/ShawnArgent/js-password-gen">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 text-center">
          <div className="card">
            <a href="https://shawnargent.github.io/day-planner/">
              <h4 className="card-header">
                Day Planner
                <button type="button" className="btn btn-secondary btn-sm">
                  DEMO
                </button>
              </h4>
              <img src={Planner} className="card-img-top" alt="day planner example" />
            </a>
            <article className="card-text">HTML, CSS, JS</article>
            <a className="links repo" href="https://github.com/ShawnArgent/day-planner">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 text-center">
          <div className="card">
            <a href="https://shawnargent.github.io/Java-Quiz-Code/">
              <h4 className="card-header">
                JS Quiz
                <button type="button" className="btn btn-secondary btn-sm">
                  DEMO
                </button>
              </h4>
              <img src={Quiz} className="card-img-top" alt="javascript quiz example" />
            </a>
            <article className="card-text">HTML, CSS, JS</article>
            <a className="links repo" href="https://github.com/ShawnArgent/Java-Quiz-Code">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 text-center">
          <div className="card">
            <a href="https://shawnargent.github.io/weather-dashboard/">
              <h4 className="card-header">
                Weather Dashboard
                <button type="button" className="btn btn-secondary btn-sm">
                  DEMO
                </button>
              </h4>
              <img src={Weather} className="card-img-top" alt="weather dashboard example" />
            </a>
            <article className="card-text">HTML, CSS, JS</article>
            <a className="links repo" href="https://github.com/ShawnArgent/weather-dashboard">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 text-center">
          <div className="card">
            <a href="https://mrmrc182.github.io/farm-market-finder/">
              <h4 className="card-header">
                Farmers' Market Finder
                <button type="button" className="btn btn-secondary btn-sm">
                  DEMO
                </button>
              </h4>
              <img src="./assets/images/mrmrc182.github.io_farm-market-finder_.png" className="card-img-top" alt="market finder example" />
            </a>
            <article className="card-text">HTML, CSS, JS</article>
            <a className="links repo" href="https://github.com/ShawnArgent/farm-market-finder">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
