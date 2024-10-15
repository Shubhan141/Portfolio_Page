import React from 'react';
import Hs from './Home.module.css';
import girlsImg from './Image/proImg.jpg'

export default function Home() {
  return (
    <div className={Hs.infoContainer}>
      <div className={Hs.devInfocontainer}>
        <div className={Hs.hello}>Hi, I am</div>
        <div className={Hs.name}>Mo Shubhan</div>
        <div className={Hs.about}>Front-end Developer</div>
        <div className={Hs.moreAbout}>
          I am a front-end developer who loves coffee. I live in Uttar Pradesh and often visit New Delhi to buy some coffee.
        </div>
        <div className={Hs.buttons}>
          <button className={Hs.cvButton}>Download CV</button>
          <button className={Hs.contactButton}>Contact Me!</button>
        </div>
      </div>
      <img src={girlsImg} className={Hs.profileImage} alt="Profile" />
    </div>
  );
}
