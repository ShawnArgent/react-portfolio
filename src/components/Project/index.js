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
          <a href={link} target='_blank' rel='noopener noreferrer'>{removeHyphensAndCapitalize(name)}
          <i className='link-icon'><FiExternalLink/></i>
</a>{' '}
          <a href={repo} target='_blank' rel='noopener noreferrer'>
         <i className="projectIcon"><AiFillGithub/></i>
          </a>
        </h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default Project;
