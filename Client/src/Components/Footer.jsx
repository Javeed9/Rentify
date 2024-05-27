import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-20 mx-12 p-10 px-16 bg-base-200 text-base-content border-t border-black">
  <div className="flex flex-col rounded-lg">
    <h6 className="mb-2 pl-4 font-bold text-xl">Rentify</h6> 
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">About Us</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Carrers</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Contact Us</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Follow Us</Link>
  </div> 
  <div className="flex flex-col">
    <h6 className="mb-2 pl-4 font-bold text-xl">Terms and privacy</h6> 
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">FAQ'S</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Company Policies</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Report a Problem</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Terms and conditions</Link>
  </div> 
  <div className="flex flex-col">
    <h6 className="mb-2 pl-4 font-bold text-xl">Rent your Property</h6> 
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Owner Responsibilties</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Guide to rent a toom</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Rent A property</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Pets</Link>
  </div>
  <div className="flex flex-col">
    <h6 className="mb-2 pl-4 font-bold text-xl">Book a property</h6> 
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Starter's Guide</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Rental Agreements</Link>
    <Link className="p-1 pl-4 hover:bg-blue-300 hover:text-white rounded-xl">Blogs</Link>
  </div>
</footer> 
  )
}

export default Footer