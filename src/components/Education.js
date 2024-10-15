import React from 'react';
import styles from './Education.module.css';


export default function Education() {
  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.educationTitle}>
      <i class="fa-solid fa-school"></i>
        Education</h2>
      <div className={styles.educationItem}>
        <h3>10th Grade</h3>
        <p>Chandra Wati Modern Public School Aalampur dhema,Ramgunj City</p>
        <p className={styles.date}>Graduated: 2015</p>
      </div>
      <div className={styles.educationItem}>
        <h3>12th Grade</h3>
        <p>S.D.S.V.M, Keshav Nager Amethi City</p>
        <p className={styles.date}>Graduated: 2016</p>
      </div>
      <div className={styles.educationItem}>
        <h3>B.Tech </h3>
        <p>HARCOURT BUTLER TECHNICAL University, Kanpur Nawabgunj City</p>
        <p>CGPA: 7.615</p>
        <p className={styles.date}>Graduated: 2022</p>
     
      </div>
    </div>
  );
}
