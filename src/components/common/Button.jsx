import React from 'react'

const Button = ({buttonText,bgColor, handleClick}) => {
  return (
    <div className='text-center'>
      <button style={bgColor}onClick={handleClick}  className={`px-8 py-2 mx-auto mt-4 text-sm font-medium text-white duration-150 rounded-md sm:py-3 active:scale-90 text-md bg-primary md:mx-0 hover:shadow-xl lg:text-base w-full`}>
        {buttonText}
      </button>
    </div>
    
  )
}

export default Button