import { useNavigate } from 'react-router-dom';
import styles from './Buttons.module.css'
function Buttons(){
  const navigate=useNavigate();
  const goToLogin=()=>{
    navigate('/login');
  }
  const goToSignup=()=>{
    navigate('/signup');
  }
  return (
    <>
    <div className={styles.btns}>
    <button className={styles.btn1} onClick={goToLogin}>Login</button>
    <button className={styles.btn2} onClick={goToSignup}>Signup</button>
    </div>
    </>
  )
}
export default Buttons;