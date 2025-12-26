import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main className='App relative w-screen h-screen overflow-hidden'>
        <div className='full-screen-bg fixed'></div>

        <section className='hero relative flex justify-center items-center text-white border h-full w-full z-2'>
          <div className='drum-machine-card flex flex-col items-center gap-40 w-[50vw] h-[80vh]'>
            <div className='text-6xl font-bold my-3 border-2 border-red-400'>Kick & Snare</div>
            <div className='grid grid-cols-3 border-2 border-blue-300 w-[80%] h-[50%]'>
              <div className="first">
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
              </div>
              <div className="second">
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
              </div>
              <div className="third">
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
                <p className='h-[33%] border border-red-100'>1</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
