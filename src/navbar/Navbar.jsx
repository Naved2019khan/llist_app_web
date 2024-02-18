import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex w-full  items-center  bg-slate-400'>
                <div className='bg-white h-full p-4  border-gray-600  border-r  '>
                    <h1 className=' text-4xl'>Shopper</h1>
                </div>


                <div className=' px-10 ' >
                    <h1 className=' font-bold'>Delivery to Noida</h1>
                    <h1 className=' font-thin text-xs'>Delivery to Noid sfdsfss a</h1>

                </div>
                <div className='flex justify-center items-center flex-1 bg-gray-200 rounded-xl '>
                </div>
                <div className='flex w-1/6 justify-around'>
                    <button className=' bg-white px-4 py-2 rounded-lg '>
                        Login
                    </button>
                    <button className=' bg-green-900 px-6 py-3 rounded-lg '>
                        <h1 className=' font-bold text-white'>My Cart</h1>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar