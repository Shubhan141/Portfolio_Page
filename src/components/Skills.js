import React from 'react';
import skillsStyl from './Skills.module.css';

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <h1 className={skillsStyl.sectionHeading}>
          <span>
            <i className="fas fa-chalkboard-teacher"></i>
          </span>
          <span>Skills Display</span>
        </h1>
        
        <div className={skillsStyl.skillsDisplay}>
          {[
            "C", "C++", "JavaScript", "HTML", "CSS", "OOPs", 
            "DSA", "Project", "Amazon Clone", "Spotify App", 
            "Resume Building", "Quiz Game Project"
          ].map((skill, index) => (
            <div className={skillsStyl.skillProgress} key={index}>
              <div className={skillsStyl.eightyPercentParents}>
                <div className={skillsStyl.skillName}>
                  <span>{skill}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
