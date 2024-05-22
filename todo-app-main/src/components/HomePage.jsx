import React, { useState } from 'react';
import AppHead from './homepage/AppHead';
import ChooseTask from './homepage/ChooseTask';
import ContinueButton from './homepage/ContinueButton';
import Buttons from './homepage/Buttons';
import styles from './HomePage.module.css';

function HomePage() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
    <div className={styles.background}>
    <Buttons/>
      <AppHead />
      <ChooseTask setSelectedTask={setSelectedOption} />
      <ContinueButton disabled={!selectedOption} />
    </div>
    </>
  );
}

export default HomePage;
