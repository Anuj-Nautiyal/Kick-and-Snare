import React from 'react'

const Drumpad = ({ content }) => {
    const [number, text] = content.split(" ")
    return (
        <div className='h-[33%] flex justify-center items-center'>
            <button className='border-2 border-[#676060] cursor-pointer w-37.5 hover:scale-101 active:scale-99 py-1 px-5 rounded-2xl shadow-[8px_10px_25px_-3px_#464543] backdrop-blur-[2px]'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-3xl font-bold number text-shadow-sm text-shadow-amber-200'>{number}</span>
                    <span className='text-xl font-semibold text-yellow-400'>{text}</span>
                </div>
            </button>
        </div>
    )
}

export default Drumpad
