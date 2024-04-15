import React from 'react'

export default function Input(props) {
    return (
        <div className='w-full relative border-2 py-2 rounded'>
            <input type="email" className='w-full  focus:outline-none bg-transparent px-3' placeholder={props.holder} value={props.value}/>
            <p className='absolute top-[-15px] left-1 bg-[#F7F8F9] px-2 text-[#3e94ea]' >{props.title}</p>
        </div>
    )
}

