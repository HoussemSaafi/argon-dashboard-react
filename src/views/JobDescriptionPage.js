import React from 'react'
import styles from '../styles/jobDescription.module.css';
import { useHistory } from 'react-router-dom';

export default function JobDescriptionPage() {
  const history = useHistory();

  function handleNextButtonClick() {
    history.push('/upload/resume');
  }
  
  
  return (
<div className={styles['page-container']}>

    <div className={styles['card']}>
    
    <div className={styles['card-content']}>
 <div className={styles['card-title']} > 
 1. PASTE YOUR JOB DESCRIPTION

  </div>
  <div className={styles['card-text']}>
  <textarea type="text" className={styles["textarea-container"]} spellcheck="true" placeholder="Paste the job description in here so we can analyze its skills.

To make things more accurate, paste in the full job description 
(e.g. roles, responsibilities, qualifications) but exclude 
sections like the 'About Us/Company' or information around 
salary/benefits or diversity, which don't mention hard 
skills. Only English job descriptions please.

"></textarea>
     </div>
     <br></br>
     <button
                  className={styles['file-upload-button']}
                  type='button'
      onClick={handleNextButtonClick}
    >

                  Next
                </button>

</div>
  </div> 
  </div> 

   )
}
