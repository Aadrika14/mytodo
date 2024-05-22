import { assets } from "../../assets/assets";
import React, { useEffect, useState } from 'react';
import styles from './ProfileMain.module.css';

function ProfileMain() {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Your Profile</h1>
      <div className={styles.profileImageContainer}>
        <img src={assets.profile} alt="Profile1" className={styles.profileImage} />
      </div>
      <div className={styles.uploadContainer}>
        <img src={assets.upload} alt="Upload" className={styles.uploadIcon} />
        <span className={styles.uploadText}>Upload Photo</span>
      </div>
      <input className={styles.inputField} type="text" placeholder="Enter your name" />
      <input className={styles.inputField} type="email" placeholder="Enter Your Email" />
      <button className={styles.updateButton}>Update Profile</button>
    </div>
  );
}

export default ProfileMain;