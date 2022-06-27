import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className='project' key={name}>
      <img src={require(`../../assets/projects/${name}.jpg`).default} alt={removeHyphensAndCapitalize(name)} className='project-bg' />
      <div className='project-text'>
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}
          <i className='link-icon'><FiExternalLink/></i>
</a>{' '}
          <a href={repo}>
         <i className="projectIcon"><AiFillGithub/></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
