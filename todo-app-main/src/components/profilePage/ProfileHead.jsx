import { assets } from "../../assets/assets";
import React from 'react';
import styles from './ProfileHead.module.css';

function ProfileHead() {
  return (
    <div className={styles.headContainer}>
      <h2 className={styles.header}>
          <span className={styles.dynamicText}>Yahoo! </span> you chose what to do today!
          <img src={assets.smile} alt="" className={styles.smile}/>
      </h2>
      <p className={styles.paragraph}>
        Congratulations on taking the first step towards organizing your life with ClearQuest!
      </p>
    </div>
  )
}

export default ProfileHead;