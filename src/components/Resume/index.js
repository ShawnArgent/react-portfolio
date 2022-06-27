import React from 'react';
import resume from '../../assets/argent_resume.pdf'

<section>
<div className="flex justify-center h-max">
<iframe 
    title="resume" 
    src={`${resume}`} 
    alt="My resume" 
    height="500" 
    className="md:w-8/12 w-full"
    scrolling="auto"
    type="application/pdf"
/>
</div>
</section>

export default Resume;