import React from 'react'
import { useState } from 'react'
import image from '../assets/bg-image.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [error, setError] = useState("");


    async function check(e) {
        e.preventDefault()

        try {
            const response = await axios.post("https://netflix-signin-page-clone.onrender.com/login", { "email": email, "password": pass })

            console.log(response)

            if (response.data === true) {
                setError("")
                navigate("/dashboard")
            } else {
                setError("Invalid email or password");
            }

            setemail("")
            setpass("")

        } catch (err) {
            setError("⚠️ Something went wrong. Try again later.");
            console.log(err);
        }


    }



    return (
        <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
            <h1 className='hidden sm:block text-4xl absolute top-5 left-5 z-10 text-red-600 font-bold shadow-lg drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]'>
                NETFLIX
            </h1>

            <img src={image} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover' />

            <div className='bg-black/70 text-white rounded-lg p-10 max-w-md w-full z-10 my-10 relative'>

                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold mt-10'>Sign In</h1>

                    <form className='flex flex-col' onSubmit={check}>
                        <input type="email" placeholder='Email' className='border border-gray-400 mt-6 p-3 bg-transparent text-white ' required
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value)
                            }} />
                        <input type="password" placeholder='Password' className='border border-gray-400 mt-3 p-3 bg-transparent text-white' required
                            value={pass}
                            onChange={(e) => {
                                setpass(e.target.value)
                            }} />
                        {error && (
                            <p className="text-red-500 text-sm mt-2 font-semibold">
                                {error}
                            </p>
                        )}
                        <button className='bg-red-600 py-2 mt-3 rounded-sm font-semibold cursor-pointer hover:bg-red-700'>Sign In</button>
                    </form>

                    <p className='text-center mt-2 text-gray-400 font-semibold'>OR</p>

                    <button className='bg-gray-600 py-2 mt-2 rounded-sm font-semibold cursor-pointer hover:bg-gray-700'>Use a sign-in code</button>

                    <p className='text-center mt-3 underline cursor-pointer'>Forgot password?</p>

                    <label className='flex items-center gap-2 mt-3 cursor-pointer'>
                        <input type="checkbox" className='w-4 h-4' />
                        <span>Remember me</span>
                    </label>

                    <div className='flex gap-1 mt-2'>
                        <p className='text-gray-300'>New to Netflix?</p>
                        <p className='font-semibold cursor-pointer hover:underline'>Sign up now</p>
                    </div>

                    <p className='text-gray-400 text-sm mt-3'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>

                    <p className='text-blue-500 text-sm mt-2 underline cursor-pointer'>Learn more</p>
                </div>
                <h1 className='md:hidden text-4xl absolute top-3 left-9 z-10 text-red-600 font-semibold shadow-lg drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]'>
                    NETFLIX
                </h1>

            </div>
        </div>
    )
}

export default Login
