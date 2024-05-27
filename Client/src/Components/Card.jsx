import React from 'react'

function Card({text, image, customStyles, children}) {

    return (
        <>
            <div className={`${!children ? 'shadow-blue-700 shadow-md hover:scale-110 hover:shadow-2xl' : 'shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'} ${customStyles} flex justify-center items-center w-[320px] h-[160px] relative rounded-xl  transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70`}>
                {!children ? (
                    <>
                    <div className="p-4 md:p-5">
                        { text && (
                            <h3 className="text-3xl p-2 font-bold bg-gray-950/60 text-white rounded-lg">
                            {text}
                        </h3>)
                        }
                    </div>
                    <div className="absolute top-0 start-0 end-0 -z-10">
                    <img className={`w-[320px] h-[160px] rounded-xl transition-transform duration-500 ease-in-out`} src={image} alt="Image Description"/>
                </div>
                </>
                ) : children}
            </div>
        </>
  )
}

export default Card