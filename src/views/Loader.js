import React, { useEffect, useState } from 'react';
import styles from '../styles/Loader.module.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core'; // disable automatic addition of CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCheckCircle ,faCircle } from '@fortawesome/free-regular-svg-icons';
// import {  faCircle } from '@fortawesome/free-solid-svg-icons';


config.autoAddCss = true;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);



  useEffect(() => {
    // simulate loading process
    const timer1 = setTimeout(() => {
      setCheck1(true);
    }, 500);
    const timer2 = setTimeout(() => {
      setCheck2(true);
    }, 1000);
    const timer3 = setTimeout(() => {
      setCheck3(true);
    }, 1500);
    const timer4 = setTimeout(() => {
      setCheck4(true);
      setIsLoading(false);
    }, 2000);
  //   const timer5 = setTimeout(() => {

  //   // reset the check icons
  //   setCheck1(false);
  //   setCheck2(false);
  //   setCheck3(false);
  //   setCheck4(false);
  // }, 3000);
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      // clearTimeout(timer5);

    };
  }, []);
  









  return (
<div className={styles['page-container']}>
    
<div className={styles["loading-container"]}>
        <div className={styles["loading-text"]}>
          <span>
            <FontAwesomeIcon icon={check1 ? faCheckCircle : faCircle} />
          </span>
          <span> </span>
          <span>P</span>
          <span>l</span>
          <span>e</span>
          <span>a</span>
          <span>s</span>
          <span>e</span>
          <span> </span>
          <span>w</span>
          <span>a</span>
          <span>i</span>
          <span>t</span>
          <span>...</span>
        </div>

        <div className={styles["loading-text"]}>
          <span>
            <FontAwesomeIcon icon={check2 ? faCheckCircle : faCircle} />
          </span>
          <span> </span>
          <span>E</span>
          <span>v</span>
          <span>a</span>
          <span>l</span>
          <span>u</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span> </span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>

        <div className={styles["loading-text"]}>
          <span>
            <FontAwesomeIcon icon={check3 ? faCheckCircle : faCircle} />
          </span>
          <span> </span>
          <span>I</span>
          <span>d</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>i</span>
          <span>f</span>
          <span>y</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span> </span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>

        <div className={styles["loading-text"]}>
          <span>
            <FontAwesomeIcon icon={check4 ? faCheckCircle : faCircle} />
          </span>
          <span> </span>

          <span>A</span>
          <span>n</span>
          <span>a</span>
          <span>l</span>
          <span>y</span>
          <span>z</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span> </span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        


{/* <div class="loading-container">
<div class="loading-text">
  <span>
  <FontAwesomeIcon icon={faCheckCircle} />
 </span>
 <span > </span>
  <span>P</span>
  <span>l</span>
  <span>e</span>
  <span>a</span>
  <span>s</span>
  <span>e</span>
  <span> </span>
  <span>w</span>
  <span>a</span>
  <span>i</span>
  <span>t</span>
  <span>...</span>
</div>

<div class="loading-text">
<span>
  <FontAwesomeIcon icon={faCheckCircle} />
 </span>
 <span > </span>

  <span>E</span>
  <span>v</span>
  <span>a</span>
  <span>l</span>
  <span>u</span>
  <span>a</span>
  <span>t</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  <span> </span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</div>

<div class="loading-text">
<span>
  <FontAwesomeIcon icon={faCheckCircle} />
 </span>
 <span > </span>

  <span>I</span>
  <span>d</span>
  <span>e</span>
  <span>n</span>
  <span>t</span>
  <span>i</span>
  <span>f</span>
  <span>y</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  <span> </span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</div>

<div class="loading-text">
<span>
  <FontAwesomeIcon icon={faCheckCircle} />
 </span>
 <span > </span>

  <span>A</span>
  <span>n</span>
  <span>a</span>
  <span>l</span>
  <span>y</span>
  <span>z</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  <span> </span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</div>
 */}


  {/* <div class="loading-text">
    
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
  <br></br>

  <div class="loading-text">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
  <br></br>

    <div class="loading-text">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>

  
  <br></br> */}





         </div>
         </div>



  );
};

export default Loader;
