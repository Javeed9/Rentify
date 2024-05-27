import React from 'react'

function Button({text, primary, disabled, onClick, isLoading, customStyles="", children}) {
    if(disabled){
        return (
            <button onClick={onClick} type="button" className={`${customStyles} py-2 px-3 mt-2 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl border border-transparent bg-gray-600 text-white hover:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none`}>
            {isLoading && <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>}
            {text}
            {children}
    </button>
        )
    }
    return (
        <>
            {
                primary ? (
                    <button onClick={onClick} type="button" className={`${customStyles} py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none`}>
                        {isLoading && <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>}
                        {text}
                        {children}
                </button>
                ) : (
                    <button onClick={onClick} type="button" className={`${customStyles} py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl border border-blue-600 text-blue-600 hover:border-blue-800 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400`}>
                        {text}
                        {children}
                    </button>
                )
            }
        </>
  )
}

export default Button