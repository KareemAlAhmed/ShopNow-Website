

import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect, disconnect } from './components/store/sockets/socketSlicer';
import { Bounce, ToastContainer } from 'react-toastify';
import ProductPage from './components/Product/productPage';
import { fetchAllProd, getProds } from './components/store/slicers/productSlicer';
import { getCurrentUser } from './components/store/slicers/userSlicer';
import Cart from './components/Cart';

function App() {
  const dispatch=useDispatch();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

 useEffect(() => {
    // Connect socket when app starts
    dispatch(connect("http://localhost:4001"));
    if(localStorage.getItem("allProds") == null){
      dispatch(fetchAllProd("all"));
    }else{
      dispatch(getProds());
    }

    if(localStorage.getItem("currentUser") != null){
      dispatch(getCurrentUser());
    }


    // Cleanup on app unmount
    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);


  return (
    <>
    <NavBar />
    <ScrollToTop/>
    <Routes> 
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
    <Footer />
    </>
  )
}

export default App
