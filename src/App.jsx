import { useState } from 'react'
import './App.css'
import Drumpad from './assets/components/Drumpad'

function App() {

  return (
    <>
      <main className='App relative w-screen h-screen overflow-hidden'>
        <div className='full-screen-bg fixed'></div>

        <section className='hero relative flex justify-center items-center text-white border h-full w-full z-2'>
          <div className='drum-machine-card flex flex-col items-center gap-40 w-[50vw] h-[80vh]'>
            <div className='text-6xl font-bold my-3'>Kick & Snare</div>
            <div className='grid grid-cols-3 w-[80%] h-[55%]'>
              <div className="first">
                <Drumpad content="7 Tom-1"/>
                <Drumpad content="4 O-Hihat"/>
                <Drumpad content="1 C-Hihat"/>
              </div>
              <div className="second">
                <Drumpad content="8 C-Cymbal"/>
                <Drumpad content="5 Snare"/>
                <Drumpad content="2 KICK"/>
              </div>
              <div className="third">
                <Drumpad content="9 Tom-2"/>
                <Drumpad content="6 R-cymbal"/>
                <Drumpad content="3 Floortom"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
