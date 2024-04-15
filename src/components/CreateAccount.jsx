import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom';
const list = [
    {
        title: 'Full Name',
        value: 'Marry Deo'
    },
    {
        title: 'Phone Number',
        value: 'Marry Deo'
    },
    {
        title: "Email address",
        value: 'Marry Deo'
    },
    {
        title: 'Company name',
        value: 'Marry Deo'
    }
]
export default function CreateAccount() {
    return (
        <div className='w-full h-full flex justify-center px-3  py-10'>
            <div className='w-full xl:w-1/5 h-full border-2 bg-[#F7F8F9] flex flex-col p-3 gap-5 relative md:w-2/3'>
                <h1 className='w-3/4 text-[28px] font-bold'>Create your PopX account </h1>
                {
                    list.map((ele) => (<Input title={ele.title} value={ele.value}></Input>))
                }
                <label htmlFor="">Are You Agency?</label>
                <div className='flex gap-2 h-24 items-start'>
                    <div className='flex items-center gap-1 '><input type="radio" checked/ >Yes</div>
                    <div className='flex items-center gap-1'><input type="radio" / >No</div>
                </div>
                <Link to={'/signin'}><button className='button-10 bg-indigo-600'>Create Account</button></Link>
            </div>
        </div>
    )
}


