import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3, TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si'

function Skills() {
  return (
    <section className="my-5">
      <div className="my-2">
     
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li><AiOutlineHtml5/></li>
          <li><TbBrandCss3/></li>
          <li><TbBrandJavascript/></li>
          <li><FaReact/></li>
          <li><BsBootstrap/></li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li><FaNodeJs/></li>
          <li><SiExpress/></li>
          <li><SiMongodb/></li>
          <li><SiMysql/></li>
         
        </ul>
      </div>
    </section>
  );
}

export default Skills;
