import React from 'react'
import image from '../assets/bg-image.jpg'
import NetflixLogo from '../assets/Logonetflix.png'

const Dashboard = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
            <img className="absolute top-2 left-2 w-[35%] md:w-3xs z-10" src={NetflixLogo} alt="" />

            <img src={image} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover' />

            <div className="bg-black/70 text-red-600 rounded-lg p-10 max-w-md w-full z-10 flex flex-col text-3xl gap-3 font-semibold text-center">
                <h1>Welcome</h1>
                <h1>To</h1>
                <h1>Netflix....</h1>
                <h1 className='text-gray-400 font-light text-[18px]'>Your entertainment journey starts now.
                    Click below to activate your membership.</h1>

                <a href="https://www.netflix.com/in/">
                    <button className="bg-red-600 text-white py-2 px-8 rounded-md hover:bg-red-700 transition text-[20px]">
                        Start Membership
                    </button>
                </a>
            </div>


        </div>
    )
}

export default Dashboard