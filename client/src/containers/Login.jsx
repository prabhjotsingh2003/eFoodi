import React from 'react'
import { LoginBg } from "../assets"
import { Logo } from "../assets"
import { LoginInput } from "../components";
const Login = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background image*/}
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      ></img>

      {/*content box*/}
      <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        {/*Top logo sectioon*/}
        <div className='flex items-center justify-start gap-4 w-full'>
          <img src={Logo} className='w-8 alt="' />
          <p  className="text-black font-semibold text-2xl">City</p>
        </div>
        {/*Welcome text */}
        <p className='text-3xl font-semibold text-black'>Welcome Back</p>
        <p className='text-xl text-black -mt-6'>Sign in with following</p>

        {/*input section */}
        <div className='w-full flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput/>
        </div>
      </div>
    </div>
  );
}

export default Login
