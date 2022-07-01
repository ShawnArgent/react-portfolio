
import React from 'react';
import outdoor from '../../assets/outdoor.jpeg';

function About() {
  return (
    <section className="my-5 center">
      
        <h2>Shawn Argent</h2>
        <h3>
          Web Developer/Designer
        </h3>
        <div className="col-md about-center">
            <img src={outdoor} className="about-photo img-fluid" alt="Me"></img>
        </div>
        <h4>
          UCSD Extended Studies Full Stack Coding Boot Camp - Award of Completion Certificate - June 2022
        </h4>
        <p> 
        Dedicated problem solver with a creative mind, making a career transition to web development/design. With a diverse professional background which includes advertising, media, e-commerce, brand management, real estate, restaurant, retail, construction management, and golf, I'm looking forward to implementing newly learned software development skills in ways that benefit both the organization/brand and end-user. 
        I'm an avid, competitive golfer who loves learning new things, spending time with my two dogs, helping people, cooking, and creating electronic music - all while continuing to sharpen software developer skills.
</p>
    </section>
  );
}

export default About;
