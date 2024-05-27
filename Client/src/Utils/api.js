import axios from 'axios';
import conf from '../Config/conf';
import { toast } from 'react-toastify';

export const signupQuery = async (data, navigate, setToken, setIsAdmin) => {
  try {
    // Use the server route from your configuration file for the API endpoint
    const url = conf.serverRoute + 'user/signup';
    const response = await axios.post(url, data);

    // Check if response and response.data exist
    if (response && response.data && response.data.token) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      setIsAdmin(response.data.isAdmin); // Set admin status based on response
      navigate("/"); // Redirect to the homepage or dashboard after signup
    } else {
      // Provide feedback in case of failure when no token is provided
      alert('Error: Unable to create account'); 
    }
  } catch (error) {
    console.error('Error:', error);
    // Check for error.response and error.response.data before accessing the message
    alert('Error: ' + (error.response && error.response.data ? error.response.data.message : 'Unknown error'));
  }
};

export const loginQuery = async (data, navigate, setToken, setIsAdmin) => {
  try {
    // Ensure the configuration path is correctly referenced
    const url = conf.serverRoute + 'user/login';
    const response = await axios.post(url, data);

    // Check if response and response.data exist and handle the login response accordingly
    if (response && response.data && response.data.token) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token); // Store token in localStorage

      // Set admin status based on response if provided, else default to false
      setIsAdmin(response.data.isAdmin || false);
      
      toast("Logged in successfully.");
      navigate("/"); // Redirect to the homepage or dashboard after login
    } else {
      // Provide feedback in case of failure when no token is provided
      alert('Error: Unable to log in');
    }
  } catch (error) {
    console.error('Error:', error);
    // Check for error.response and error.response.data before accessing the message
    alert('Error: ' + (error.response && error.response.data ? error.response.data.message : 'Unable to log in'));
  }
};


export const addproperty = async (data, navigate) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      conf.serverRoute + 'property/addProperty', 
      data, 
      { headers: { Authorization: `jwt ${token}` } }
    );
    if (response) {
      console.log(response);
      toast("New property added sucessfully.")
      navigate('/');
    } else {
      alert('Error');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error');
  }
};

export const getPosts = async (query) => {
  const token = localStorage.getItem('token');
    const response = await axios.get(
      conf.serverRoute + 'property/getProperties',
      { headers: { Authorization: `jwt ${token}` },
        params: query
      }
    );
  return response.data;
}

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error("No token found. User is likely not logged in.");
  }

  const response = await axios.get(
    conf.serverRoute + 'user/',
    { headers: { Authorization: `jwt ${token}` } }
  );
  return response.data;
}

export const editProperty = async (propertyId, data, navigate) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.patch(
      `${conf.serverRoute}property/${propertyId}`,
      data,
      { headers: { Authorization: `jwt ${token}` } }
    );

    if (response.status === 200) {
      toast.success("Property updated successfully.");
      // window.location.reload();
      navigate('/')
    } else {
      toast.error('Error: Unable to update property. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error: ' + (error.response && error.response.data ? error.response.data.message : 'Unable to update property'));
  }
};

export const deleteProperty = async (propertyId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.delete(
      `${conf.serverRoute}property/${propertyId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      toast.success("Property deleted successfully.");
      window.location.reload();
    } else {
      toast.error('Error: Unable to delete property. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error: ' + (error.response && error.response.data ? error.response.data.message : 'Unable to delete property'));
  }
};

