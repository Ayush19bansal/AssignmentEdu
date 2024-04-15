import React from 'react'
import user from '../assets/Ellipse114.png'
import { Camera } from 'lucide-react';


export default function AccountSetting() {
    return (
        <div className='w-full h-full flex justify-center px-3  py-10'>
            <div className='w-full xl:w-1/5 h-full border-2 bg-[#F7F8F9] flex flex-col gap-5 pt-0 relative md:w-2/3'>
                <div className='bg-white w-full h-fit p-3'>
                    <h2 className='font-semibold text-sm'>Account Settings</h2>
                </div>
                <div className='p-3 flex flex-col gap-4  '>
                    <div className='flex items-center gap-3'>
                        <div className=' w-14  relative '>
                            <img src={user} alt="" className='w-full h-full' />
                            <Camera className='absolute bottom-2 -right-1 w-4 h-4 p-[3px] text-white bg-blue-600 rounded-full'></Camera>
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Marry Doe</p>
                            <span className='text-sm  w-full text-dot'>Marry@gmail.com</span>
                        </div>

                    </div>
                    <p className='text-xs text-[#6b6c6d] font-medium border-b-2 pb-4 border-dashed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur quibusdam, aut ullam minima quis </p>
                </div>
            </div>

        </div>
        
    )
}
