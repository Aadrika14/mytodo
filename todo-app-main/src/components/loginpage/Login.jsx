// Login.jsx
import React, { useState } from 'react';
import styles from './Login.module.css'; // Import your CSS file for styling
import { assets } from "../../assets/assets";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the credentials to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <img src={assets.login} alt="Login" className={styles.loginImage} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
