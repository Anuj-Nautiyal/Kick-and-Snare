import React, { useEffect } from 'react'

const Drumpad = ({ beat, pressedKey, audiosrc }) => {

    const playAudio = () => {
      const audio = new Audio(audiosrc);
      audio.currentTime = 0;
      audio.play();
    }

    useEffect(() => {
      const handleKeydown = (event) => {
        if (event.key === pressedKey){
            playAudio();
        }
      }
      window.addEventListener('keydown', handleKeydown);
      
      return () => window.removeEventListener('keydown', handleKeydown);
      
    }, [pressedKey]);
    
    
    return (
        <div className='h-[33%] flex justify-center items-center'>
            <button onClick={playAudio} className='border-2 border-[#676060] cursor-pointer w-37.5 hover:scale-101 active:scale-99 py-1 px-5 rounded-2xl shadow-[8px_10px_25px_-3px_#464543] backdrop-blur-[2px]'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-3xl font-bold number text-shadow-sm text-shadow-amber-200'>{pressedKey}</span>
                    <span className='text-xl font-semibold text-yellow-400'>{beat}</span>
                </div>
            </button>
        </div>
    )
}

export default Drumpad
