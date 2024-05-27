import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Shared/Hooks/Auth'; // Assuming Auth hook is defined similarly
import { signupQuery } from '../Utils/api';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const { setToken, setIsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    };
    signupQuery(data, navigate, setToken, setIsAdmin);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign Up
            </h1>
            <form className="w-full flex-1 mt-8" onSubmit={handleSignUp}>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white mt-4"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white mt-4"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white mt-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white mt-4"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
