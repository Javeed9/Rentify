import React from 'react'
import Button from "./Button";
import { Link } from 'react-router-dom';
import { useAuth } from '../Shared/Hooks';

function Header() {
  const {isAdmin, setIsAdmin} = useAuth();

    return (
        <div
          className="w-full flex justify-between items-center p-2 pb-6 my-4 px-10 border-b border-black"
        >
          <Link to="/" className="flex items-center flex-col ml-8">
          <h2 className="font-extrabold text-4xl leading-6 self-center text-blue-700 dark:text-white ml-2 font-mono">Rentify</h2>
          <p className='text-lg mt-1'>Rent/Book a property</p>
          </Link>
          {!isAdmin ? (
          <div className="mr-8">
            <Link to="/login">
              <Button text="Login"/>
            </Link>
            <Link to="/signup">
              <Button customStyles="ml-4" primary={true} text="Signup"/>
            </Link>
          </div>
      ) : (
            <div className="flex items-center gap-2">
            <Link to={"/profile"}>
            <img
                className="inline-block flex-shrink-0 h-14 w-14 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
          </Link>
          <Button
        onClick = { () => {
          localStorage.removeItem('token')
          setIsAdmin(false)
        }}
        text="Logout"/>
        </div>
      )}
        </div>
      );
}

export default Header