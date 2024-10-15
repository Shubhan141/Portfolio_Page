import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>
      <i class="fa-solid fa-id-card"></i>        Contact Us</h2>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Name</label>
          <input className={styles.formInput} type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">Email</label>
          <input className={styles.formInput} type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="message">Message</label>
          <textarea className={styles.formTextarea} id="message" name="message" required></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="attachment">Attachment</label>
          <input 
            className={styles.fileInput} 
            type="file" 
            id="attachment" 
            name="attachment" 
            accept="image/*"
            onChange={handleFileChange} 
          />
          {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
        </div>
        <button className={styles.submitButton} type="submit">Send Message</button>
      </form>
    </div>
  );
}
