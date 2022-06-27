import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {

  return (
    <section className="section contact center" id="contact">
      <a href={`mailto: kshawn001@gmail.com`}
        className="email">
        <AiOutlineMail />
      </a>

      <a  href='https://github.com/ShawnArgent'
        className="icon"><AiFillGithub/>
        </a>
        <a  href='https://www.linkedin.com/in/shawnargent/'
        className="icon"><AiFillLinkedin/>
        </a>

    </section>
  );
};

export default Contact;
