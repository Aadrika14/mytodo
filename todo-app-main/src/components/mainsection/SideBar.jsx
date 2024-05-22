import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles
import styles from './SideBar.module.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTodayClick = () => {
    setShowCalendar(!showCalendar);
  };
    const navigate = useNavigate();
    const goToSettings = () => {
      navigate("/setting");
    }
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <button className={styles.addTaskBtn}>+ Add Task</button>
      </div>
      <div className={styles.sidebarItem}>
        <button className={styles.searchBtn}>🔍 Search</button>
      </div>
      <div className={styles.sidebarItem}>
        <button className={styles.todayBtn} onClick={handleTodayClick}>📅 Today</button>
      </div>
      {showCalendar && (
        <div className={styles.calendarContainer}>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            customInput={<CustomInput />} // Use customInput prop to provide custom input component
            className={styles.customCalendar} // Add additional styles to the calendar if needed
          />
        </div>
        
      )}
      <div className={styles.bottomButtons}>
        <button className={styles.helpBtn} >Help ❓ </button>
        <button className={styles.settingsBtn} onClick={goToSettings}>Settings ⚙️ </button>
      </div>
    </div>
  );
}

// CustomInput component to style the input box
// CustomInput component to style the input box
const CustomInput = ({ value, onClick }) => (
  <input
    type="text"
    value={value}
    onClick={onClick}
    className={styles.customInput} // Add custom class name for styling
    placeholder="Select date"
    readOnly // Ensure the input is read-only to prevent manual input
    style={{
      width: '100%', // Ensure the input takes up the full width
      padding: '0.8rem', // Adjust padding for consistency with button styles
      fontSize: '1.4rem', // Adjust font size to match button styles
      border: 'none',
      backgroundColor: 'lightblue',
      borderRadius: '1rem',
      cursor: 'pointer',
      height:'2.4rem'
    }}
  />

);

export default Sidebar;
