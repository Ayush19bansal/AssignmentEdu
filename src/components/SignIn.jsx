import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='w-full h-full flex justify-center px-3  py-10'>
      <div className='w-full xl:w-1/5 h-full border-2 bg-[#F7F8F9] flex flex-col p-3 gap-5 md:w-2/3'>
            <h1 className='w-3/4 text-[28px] font-bold'>Signin to your PopX account </h1>
            <p className='w-3/4 text-sm text-[#969798]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Input holder ={'Enter email address'} title= {'Email Address'}></Input>
            <Input holder={'Enter password'} title={'password'}></Input>
            <Link to={'/accountsetting'}><button className='button-10 bg-sky-700' >Login</button></Link>
      </div>
    </div>
  )
}
