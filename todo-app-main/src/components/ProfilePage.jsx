import React from "react";
import ProfileHead from "./profilePage/ProfileHead";
import ProfileMain from "./profilePage/ProfileMain";
import ProfileLaunch from "./profilePage/ProfileLaunch";
import styles from './ProfilePage.module.css'
function ProfilePage(){
  return (
  <>
  <div className={styles.background}>
  <ProfileHead/>
  <ProfileMain/>
  <ProfileLaunch/>
  </div>
  </>
  )
}
export default ProfilePage;