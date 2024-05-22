import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileLaunch.module.css';

function ProfileLaunch() {
  const navigate = useNavigate();

  const goToMainApp = () => {
    navigate('/main');
  };

  return (
    <div className={styles.launchButtonContainer}>
      <button onClick={goToMainApp} className={styles.launchButton}>Launch ClearQuest</button>
    </div>
  );
}

export default ProfileLaunch;