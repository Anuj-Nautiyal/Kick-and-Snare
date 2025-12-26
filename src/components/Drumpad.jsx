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
        <div className='h-[25%] md:h-[30%] flex justify-center items-center'>
            <button onClick={playAudio} 
                    className='border-2 border-[#676060] cursor-pointer w-full max-w-20 sm:max-w-30 md:max-w-37.5 hover:scale-105 active:scale-95 py-2 md:py-4 px-1 rounded-xl md:rounded-2xl shadow-[5px_5px_15px_-3px_#464543] backdrop-blur-[2px] transition-transform'
            >
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-xl md:text-3xl font-bold number text-shadow-sm text-shadow-amber-200'>{pressedKey}</span>
                    <span className='text-[10px] md:text-lg font-semibold text-yellow-400 truncate w-full px-1'>{beat}</span>
                </div>
            </button>
        </div>
    )
}

export default Drumpad
