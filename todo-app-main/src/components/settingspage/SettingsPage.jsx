import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from Font Awesome
import { faUser, faCog, faCogs, faCreditCard, faPalette, faBars, faPlus, faTachometerAlt, faCalendar, faBell, faDatabase, faPlug, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import individual icons
import styles from './SettingsPage.module.css'; // Import CSS styles for your settings page


function SettingsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1 className={styles.settingsHeader}>
          <FontAwesomeIcon icon={faCogs} /> Settings Page
        </h1>
        <input type="text" placeholder="Search" className={styles.searchBar} />
        <ul className={styles.sidebarMenu}>
          <li><Link to="/account"><FontAwesomeIcon icon={faUser} /> Account</Link></li>
          <li><Link to="/general"><FontAwesomeIcon icon={faCog} /> General</Link></li>
          <li><Link to="/advanced"><FontAwesomeIcon icon={faCogs} /> Advanced</Link></li>
          <li><Link to="/subscription"><FontAwesomeIcon icon={faCreditCard} /> Subscription</Link></li>
          <li><Link to="/theme"><FontAwesomeIcon icon={faPalette} /> Theme</Link></li>
          <li><Link to="/sidebar"><FontAwesomeIcon icon={faBars} /> Sidebar</Link></li>
          <li><Link to="/quick-add"><FontAwesomeIcon icon={faPlus} /> Quick Add</Link></li>
          <li><Link to="/productivity"><FontAwesomeIcon icon={faTachometerAlt} /> Productivity</Link></li>
          <li><Link to="/reminders"><FontAwesomeIcon icon={faCalendar} /> Reminders</Link></li>
          <li><Link to="/notifications"><FontAwesomeIcon icon={faBell} /> Notifications</Link></li>
          <li><Link to="/backups"><FontAwesomeIcon icon={faDatabase} /> Backups</Link></li>
          <li><Link to="/integrations"><FontAwesomeIcon icon={faPlug} /> Integrations</Link></li>
          <ul className={styles.addTeam}>
            <li><Link to="/add-team"><FontAwesomeIcon icon={faUsers} /> Add Team</Link></li>
          </ul>
        </ul>
      </div>
      <div className={styles.content}>
        {/* Content for each settings section */}
        <div>
          <h1>Account</h1>
          <h3>Plan: Beginner</h3>
          <div>
           <h3>Photo</h3>
            <div class="photoContainer">
             <label for="photoUpload" class="photoUploadLabel">
               <input id="photoUpload" type="file" accept="image/*" class="photoUploadInput" />
             <img src="placeholder.png" alt="Profile Photo" class="profilePhoto" />
             </label>
          <button>Remove Photo</button>
  </div>
</div>

          <div>
            <h3>Name</h3>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <h3>Email Address</h3>
            <input type="email" placeholder="Enter your email address" />
            <br></br><button>Change Email</button>
          </div>
          <div>
            <h3>Password</h3>
            <button>Add Password</button>
          </div>
          <div>
            <h3>Two Factor Authentication</h3>
            <label>
              <input type="checkbox" />
              Enable Two Factor Authentication
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
