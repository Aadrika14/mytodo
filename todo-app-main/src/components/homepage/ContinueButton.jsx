import React from 'react';
import styles from './ContinueButton.module.css';
import { useNavigate } from 'react-router-dom';

function ContinueButton({ disabled }) {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  }

  return (
    <div className={styles.btnContainer}>
      <button className={`${styles.btn} ${disabled ? styles.disabled : ''}`} onClick={goToProfile}>Continue</button>
    </div>
  );
}

export default ContinueButton;
