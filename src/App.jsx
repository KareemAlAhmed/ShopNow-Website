

import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect, disconnect } from './components/store/sockets/socketSlicer';
import { socketService } from './components/Server/socketService';

function App() {
  //const socket=io("http://localhost:4001");
  const dispatch=useDispatch();

 useEffect(() => {
    // Connect socket when app starts
    dispatch(connect("http://localhost:4001"));

    // Cleanup on app unmount
    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);


  return (
    <>
    <NavBar />
    <Routes> 
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
