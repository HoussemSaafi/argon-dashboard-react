import React from 'react'
import '../styles/jobDescription.css';

export default function JobDescriptionPage() {
  return (
    <div className='card'>
    <div className='card-content'>
 <div className='card-title' > 
 1. PASTE YOUR JOB DESCRIPTION

  </div>
  <div className='card-text'>
  <textarea type="text" className="textarea-container" spellcheck="true" placeholder="Paste the job description in here so we can analyze its skills.

To make things more accurate, paste in the full job description 
(e.g. roles, responsibilities, qualifications) but exclude 
sections like the 'About Us/Company' or information around 
salary/benefits or diversity, which don't mention hard 
skills. Only English job descriptions please.

"></textarea>
     </div>
     <br></br>
        <button
                  className='file-upload-btn '
                  type='button'
                  onClick={() => {}}
                >
                  Next
                </button>

</div>
  </div>  )
}
