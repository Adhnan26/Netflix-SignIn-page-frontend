import React, { useState } from 'react'
import image from '../assets/bg-image.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSignup(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                email, password
            });

            if (response.data.success) {
                alert("Signup successful! Please Sign In.");
                navigate("/");
            } else {
                setMessage(response.data.message);
            }

        } catch (err) {
            console.log(err);
            setMessage("Server not responding.");
        }
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
            <h1 className='hidden sm:block text-4xl absolute top-5 left-5 z-10 text-red-600 font-bold'>
                NETFLIX
            </h1>

            <img src={image} alt="background" className='absolute top-0 left-0 w-full h-full object-cover' />

            <div className='bg-black/70 text-white rounded-lg p-10 max-w-md w-full z-10 relative'>
                <h1 className='text-3xl font-bold mt-10'>Sign Up</h1>

                <form className='flex flex-col' onSubmit={handleSignup}>
                    <input type="email"
                        placeholder='Email'
                        className='border border-gray-400 mt-6 p-3 bg-transparent'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    <input type="password"
                        placeholder='Password'
                        className='border border-gray-400 mt-3 p-3 bg-transparent'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                    {message && <p className='text-red-500 mt-2'>{message}</p>}

                    <div className='flex gap-1 mt-2'>
                        <p className='text-gray-300'>Already have an account?</p>
                        <p
                            className='font-semibold cursor-pointer hover:underline'
                            onClick={() => navigate("/")}
                        >
                            Sign In now
                        </p>

                    </div>

                    <p className='text-gray-400 text-sm mt-3'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>

                    <p className='text-blue-500 text-sm mt-2 underline cursor-pointer'>Learn more</p>

                    <button className='bg-red-600 py-2 mt-4 rounded-sm font-semibold hover:bg-red-700 cursor-pointer'>
                        Sign Up
                    </button>
                </form>
                <h1 className='md:hidden text-4xl absolute top-3 left-9 z-10 text-red-600 font-semibold shadow-lg drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]'>
                    NETFLIX
                </h1>

            </div>
        </div>
        
    )
}

export default Signup;
