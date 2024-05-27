import React, { useState } from 'react';
import { loginQuery } from '../Utils/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Shared/Hooks';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setToken, setIsAdmin} = useAuth();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    loginQuery({ email, password }, navigate, setToken, setIsAdmin);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Log In
              </h1>
              <div className="w-full flex-1 mt-8">

                <div className="mx-auto max-w-xs">
                  <input
                    className="border-black w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    className="border-black w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    onClick={handleLogin}
                    className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Log In</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
