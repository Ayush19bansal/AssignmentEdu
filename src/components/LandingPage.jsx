import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='w-full h-full flex justify-center px-3  py-10 '>
      <div className='w-full xl:w-1/5 h-full border-2 bg-[#F7F8F9] flex flex-col justify-end p-3 gap-3 md:w-2/3'>
        <h1 className='text-[28px] font-bold'>Welcome To PopX</h1>
        <p className='text-sm text-[#969798]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='w-full flex flex-col gap-3'>
          <Link to={'/createaccount'} className='w-ful'><button className='button-10' style={{backgroundImage: 'linear-gradient(180deg, #4B91F7 0%, #367AF6 100%)'}}>Create Account</button></Link>
          <Link to={'/signin'}><button className='button-10 button-11'>Already Registered? Login</button></Link>
        </div>
      </div>
    </div>
  );
}
