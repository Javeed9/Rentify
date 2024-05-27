import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthProvider } from './Shared/Hooks';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import conf from './Config/conf';

function Layout() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const baseurl = conf.serverRoute + "user/";

  useEffect(() => {
    if (token) {
      axios.get(
        baseurl,
        { headers: { Authorization: `Bearer ${token}` } }
      ).then(response => {
        if (response.status === 200) {
          setIsAdmin(true);
        }
      }).catch(error => {
        if (error.response) {
          if (error.response.status === 401) {
            console.log('Authentication failed or token expired, logging out...');
            localStorage.removeItem('token');
            setIsAdmin(false);
            setToken('');
            navigate('/login');
          } else {
            console.error('Error:', error);
          }
        }
      });
    }
  }, [token, navigate]);

  return (
    <>
      <ToastContainer />
      <AuthProvider value={{ isAdmin, setIsAdmin, token, setToken }}>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Layout;
