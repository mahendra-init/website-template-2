import React from 'react'

function Card() {
  return (
    <div className='bg-black bg-opacity-90 text-white mb-10 py-16'>
        <h1 className="text-4xl font-medium text-center">Contact</h1>
        <div className='my-3 flex flex-row space-x-0.5 mx-auto w-fit'>
            <img src="home.svg" alt="icon" className='mx-1 mt-0.5 h-4 w-4' />
            <p className='text-sm font-medium underline'>Home</p>
            <img src="forward.svg" className='h-5 w-5 p-0.5' alt="" />
            <p className='text-sm font-medium text-gray-600'>Contact</p>
        </div>
    </div>
  )
}

export default Card