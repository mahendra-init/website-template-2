import React from 'react'

function Footer() {
  return (
    <>
    <div className='border-0.5 border-gray-300 shadow-lg shadow-gray-300 mt-20 mb-5'>
        <img src="brand.jpeg" className='' alt="" />
    </div>
    <div className="footer grid grid-cols-4 bg-black bg-opacity-90 text-white font-sans px-6 pb-20 pt-3">
        <div className="contact">
            <h1 className='text-lg mb-6 font-bold'>CONTACT US</h1>
            <p className='text-sm font-medium w-3/4'>If you have any question, please contact us at</p>
            <span className='text-sm'>support@example.com</span>
            <div className="flex flex-row space-x-2 mt-8 w-3/4">
                <img src="support.png" className='h-14 w-14' alt="user" />
                <p className="text-sm font-medium">+048<span className='text-3xl font-medium'>800 456 789</span></p>
            </div>
        </div>
        <div className="location">
            <h1 className='text-lg mb-6 font-bold'>STORE LOCATION</h1>
            <p className='text-sm font-medium w-3/4'>Box 565, Charlestown, Nevis, West Indies, Caribbean</p>
            <p className='text-sm font-medium w-3/4 mt-11'>Monday - Friday: 8am - 4pm</p>
            <p className='text-sm font-medium w-3/4'>Saturday: 9am - 5pm</p>
        </div>
        <div className="categories">
            <h1 className='text-lg mb-6 font-bold'>CATEGORIES</h1>
            <ul className="space-y-4 text-sm font-medium">
                <li>For Men</li>
                <li>For Woman</li>
                <li>Accessories</li>
                <li>Collections</li>
                <li>Other</li>
            </ul>
        </div>
        <div className="nl">
            <h1 className='text-lg mb-6 font-bold'>NEWSLETTER</h1>
            <p className='text-sm font-medium w-3/4'>Subscribe to the weekly newsletter for all the latest updates</p>
            <div className="bg-transparent flex flex-row p-1 border-2 border-gray-800 mt-11">
                <input type="text" placeholder='Your Email...' className='p-2 bg-transparent w-2/3'/>
                <button className='bg-[#ff0000] px-4 py-2 rounded-sm font-medium'>subscribe</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer