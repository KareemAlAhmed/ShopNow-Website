

import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

function App() {


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
