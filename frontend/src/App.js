import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './ui/Login';
import Home from './ui/Home';
import Footer from './ui/core/Footer';
import Header from './ui/core/Header';
import { useSelector } from 'react-redux';
import Error from './ui/Error';
function App() {
  const logged = useSelector(state=>state.userState.loggedIn);
  return (
    <>
    {logged && <Header/>}
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='**' element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
