import React from 'react';
import resume from '../../assets/argent_resume.pdf';

function Resume({ name }) {
    return(
<section>
<div className="container">
<iframe 
    title="resume" 
    src={`${resume}`} 
    alt="My resume" 
    width= "500"
    height="500" 
    type="application/pdf"
/>
</div>
</section>
    )
}
export default Resume;