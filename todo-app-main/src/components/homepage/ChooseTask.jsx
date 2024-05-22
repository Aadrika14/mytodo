import React from 'react';
import { assets } from '../../assets/assets';
import styles from './ChooseTask.module.css';

function ChooseTask({ setSelectedTask }) {
  const handleOptionChange = (option) => {
    setSelectedTask(option);
  };

  return (
    <div className={styles.radioContainer}>
      <label htmlFor="option1" className={styles.radioButton} onClick={() => handleOptionChange('option1')}>
        <img src={assets.personal} alt="" className={styles.img} />

        <div className={styles.side}>
          <span className={styles.itemText}>Me Time</span>
          <input type="radio" id="option1" name="options" value="option1" className={styles.ops} />
        </div>
      </label>

      <label htmlFor="option2" className={styles.radioButton} onClick={() => handleOptionChange('option2')}>
        <img src={assets.work} alt="" className={styles.img} />

        <div className={styles.side}>
          <span className={styles.itemText}>Workoholic</span>
          <input type="radio" id="option2" name="options" value="option2" className={styles.ops} />
        </div>
      </label>

      <label htmlFor="option3" className={styles.radioButton} onClick={() => handleOptionChange('option3')}>
        <img src={assets.education} alt="" className={styles.img} />

        <div className={styles.side}>
          <span className={styles.itemText}>Time for Education</span>
          <input type="radio" id="option3" name="options" value="option3" className={styles.ops} />
        </div>
      </label>
    </div>
  );
}

export default ChooseTask;
