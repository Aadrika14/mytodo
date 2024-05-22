import { Route, Router, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import Login from './components/LoginPage';
import Signup from './components/signuppage/Signup';
import MainSectionPage from './components/MainSectionPage';
import SettingsMain from './components/SettingsMain';

function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/main' element={<MainSectionPage/>}></Route>
        <Route path='/setting' element={<SettingsMain/>}></Route>
      </Routes>
  </>
  )
}
export default App;