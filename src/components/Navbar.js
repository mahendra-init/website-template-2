import React from 'react'

function Navbar() {
  return (
    <div className='mx-6 flex flex-row mb-1'>
        <div className="title text-3xl text-black font-extrabold py-8 pl-4 text-center tracking-tighter border-r-2 border-gray-300 w-1/5 ">
            ekommart
        </div>
        <div className='ml-5 flex-1'>
            <div className="upper flex flex-row my-3 w-full pr-3">
                <div className="left flex flex-1 flex-row border-r-2 border-gray-300">
                    <div className="bg-transparent flex flex-row flex-1 p-1 border-2 border-gray-300 w-5/6">
                        <img src="search.svg" className='h-6 w-6 m-2' alt="" />
                        <input type="text" placeholder='Search products...' className='bg-transparent w-2/3'/>
                        <button className='bg-[#ff0000] px-5 text-white rounded-sm font-medium'>Search</button>
                    </div>  
                    <div className='px-6'>
                        <p className=' font-bold text-black'>+84 800 456 789</p>
                        <span className='text-sm font-medium text-gray-500'>CALL US FREE</span>
                    </div>
                </div>
                <div className="right flex flex-row space-x-2">
                    <div className='pl-6'>
                        <p className=' font-bold text-black'>FREE SHIPPING</p>
                        <span className='text-sm font-medium text-gray-500'>ON ORDERS OVER $150.0</span>
                    </div>
                    <img className='h-6 w-6 mt-4' src="user.svg" alt="" />
                    <img className='h-6 w-6 mt-4' src="heart.svg" alt="" />
                    <img className='h-6 w-6 mt-4' src="cart.svg" alt="" />
                    <span className='text-black font-bold pt-2 text-base mt-3'>$0.00</span>
                </div>
            </div>
            <div className="lower mb-3">
                <ul className="flex flex-row space-x-5 py-1 text-black font-bold">
                    <li className='flex flex-row space-x-1'><p>Home </p><img src="down.svg" className='h-6 w-6 pt-2' alt="" /></li>
                    <li className='flex flex-row space-x-1'><p>About</p> <img src="down.svg" className='h-6 w-6 pt-2' alt="" /></li>
                    <li className='flex flex-row space-x-1'><p>Shop </p><img src="down.svg" className='h-6 w-6 pt-2' alt="" /></li>
                    <li className='flex flex-row space-x-1'><p>Blog </p><img src="down.svg" className='h-6 w-6 pt-2' alt="" /></li>
                    <li className='flex flex-row space-x-1'><p>Pages</p> <img src="down.svg" className='h-6 w-6 pt-2' alt="" /></li>
                    <li className='text-red-600'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar