import React from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.experienceTitle}>
      <i class="fa-solid fa-briefcase"></i>
        Experience & Skills</h2>
      <div className={styles.experienceItem}>
        <h3>Software Engineer</h3>
        <p>Company Name, Location</p>
        <p>Worked on developing web applications using React.js, JavaScript, and TypeScript.</p>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>React.js</li>
          <li className={styles.skillItem}>JavaScript</li>
          <li className={styles.skillItem}>HTML & CSS</li>
        </ul>
      </div>
      <div className={styles.experienceItem}>
        <h3>Junior Developer</h3>
        <p>Another Company, Location</p>
        <p>Contributed to C and C++ projects, focusing on performance optimization and bug fixes.</p>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>C</li>
          <li className={styles.skillItem}>C++</li>
          <li className={styles.skillItem}>OOP</li>
        </ul>
      </div>
    </div>
  );
}
