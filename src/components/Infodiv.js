import React from 'react'

function Infodiv() {
  return (
    <div className='flex flex-row my-16 px-4'>
        <div className="left w-[25vw]">
            <p className='text-sm text-gray-400 font-medium'>GET IN TOUCH</p>
            <p className="text-2xl text-black leading-7 font-bold w-10/12 my-3">Visit one of our agency locations or <br /> contact us today</p>
            <p className='text-lg text-black font-bold'>Head Office</p>
            <ul className="space-y-3 mt-4 text-xs text-gray-500 font-medium">
                <li className='flex flex-row items-center'><img className='h-5 w-5' src="map.svg" alt="" /><span className='ml-2'>56 Glassford Street Glasgow G1 1UL New York</span></li>
                <li className='flex flex-row items-center'><img className='h-5 w-5' src="mail.svg" alt="" /><span className='ml-2'>contact@example.com</span></li>
                <li className='flex flex-row items-center'><img className='h-5 w-5' src="phone.svg" alt="" /><span className='ml-2'>+844 123 456 78</span></li>
                <li className='flex flex-row items-center'><img className='h-5 w-5' src="time.svg" alt="" /><span className='ml-2'>Monday to Saturday: 9.00am to 16.pm</span></li>
            </ul>
        </div>
        <div className="right flex-1 shadow-md relative">
            <img src="map.png" alt="map" className='w-full h-[56vh] static ' />
            <img className='absolute -translate-y-[55vh] translate-x-1 w-72 h-28 shadow-lg shadow-gray-400' src="md.jpeg" alt="" />
            <div className="zoom absolute shadow-lg w-8 shadow-gray-400 py-1 px-2 rounded-sm space-y-1 -translate-y-20 translate-x-[54vw] bg-white">
                <img className='h-6 w-6' src="plus.svg" alt="" />
                <img className='h-6 w-6' src="sub.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Infodiv