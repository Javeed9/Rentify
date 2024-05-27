import React from 'react'

function Input({type, placeholder, children}) {
    return (
        <div className="max-w-sm space-y-3 m-10">
        <div className="relative">
          <input
            type={type || 'text'}
            className="mt-2 py-3 px-4 ps-11 block w-full border-2 border-black bg-gray-100 rounded-lg text-sm focus:border-blue-800 focus:ring-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder={placeholder}
          />
          <div className="w-8 absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            {children}

          </div>
        </div>
      </div>
      )
}

export default Input