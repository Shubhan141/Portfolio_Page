import React from 'react';
import AboutStyle from './About.module.css';
import ShubhanImg from './Image/proImg.jpg'

// Import icons from react-icons
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <div className={AboutStyle.container}>
      <img 
        src={ShubhanImg}
        alt="Profile" 
        className={AboutStyle.profileImage} 
      />
      <p className={AboutStyle.aboutText}>
        Hi, I am a Front-End Developer. I specialize in creating responsive and interactive web applications using modern technologies.
      </p>
      <div className={AboutStyle.socialLinks}>
        <a href="www.linkedin.com/in/mo-shubhan-900074228" className={AboutStyle.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Shubhan141?tab=projects" className={AboutStyle.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/yourprofile" className={AboutStyle.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/yourphonenumber" className={AboutStyle.socialLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
