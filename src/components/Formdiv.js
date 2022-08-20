import React from 'react'

function Formdiv() {
  return (
    <div className='flex flex-row p-8 my-10 border-2 border-gray-200 border-t-0 shadow-md shadow-gray-200'>
        <div className="left flex-1 px-8 mt-4">
        <p className='text-sm text-gray-400 font-medium'>LEAVE A MESSAGE</p>
        <p className="text-2xl text-black font-bold w-10/12 my-1">We love to hear from you</p>
        <form className="space-y-5 pr-12 mt-5">
            <input type="text" placeholder='Your Name' className='p-2 border-2 border-gray-200 shadow-sm w-full rounded-sm placeholder:text-slate-500 placeholder:font-medium' />
            <input type="text" placeholder='Email' className='p-2 border-2 border-gray-200 shadow-sm w-full rounded-sm placeholder:text-slate-500 placeholder:font-medium' />
            <input type="text" placeholder='Subject' className='p-2 border-2 border-gray-200 shadow-sm w-full rounded-sm placeholder:text-slate-500 placeholder:font-medium' />
            <textarea type="text" placeholder='Message' className='h-[17vh] p-2 border-2 border-gray-200 shadow-sm w-full rounded-sm placeholder:text-slate-500 placeholder:font-medium' />
            <button className='bg-[#ff0000] px-4 py-2 text-sm rounded font-medium text-white'>Submit</button>
        </form>
        </div>
        <div className="right grid grid-rows-3 gap-4 w-1/5">
            <div className="flex flex-row">
                <img src="myImage.jpeg" className='rounded-3xl h-9 w-9 my-1' alt="" />
                <div className='pl-3'>
                    <h1 className='text-lg font-medium'>John Doe</h1>
                    <p className='text-sm font-medium text-gray-500'>Senior Marketing Manager <br />Phone: +844 123 456 78 <br />Email: contact@example.com</p>
                </div>
            </div>
            <div className="flex flex-row">
                <img src="myImage.jpeg" className='rounded-3xl h-9 w-9 my-1' alt="" />
                <div className='pl-3'>
                    <h1 className='text-lg font-medium'>William Smith Doe</h1>
                    <p className='text-sm font-medium text-gray-500'>Recruting Manager <br />Phone: +844 123 456 78 <br />Email: contact@example.com</p>
                </div>
            </div>
            <div className="flex flex-row">
                <img src="myImage.jpeg" className='rounded-3xl h-9 w-9 my-1' alt="" />
                <div className='pl-3'>
                    <h1 className='text-lg font-medium'>Emma Stone</h1>
                    <p className='text-sm font-medium text-gray-500'>Human Resource<br />Phone: +844 123 456 78 <br />Email: contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formdiv