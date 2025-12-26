
import './App.css'
import Drumpad from './components/Drumpad'

function App() {

  return (
    <>
      <main className='App relative w-screen h-screen overflow-hidden'>
        <div className='full-screen-bg fixed'></div>

        <section className='relative flex justify-center items-center text-white h-full w-full z-10 p-4'>
          <div className='drum-machine-card flex flex-col items-center justify-center gap-15  w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-[90%] md:h-[80%]'>
            <div className='text-3xl md:text-5xl lg:text-6xl font-bold my-3 text-center'>Kick & Snare</div>

            <div className='grid grid-cols-3 w-[95%] md:w-[80%] h-[60%] gap-2'>
              <div className="first flex flex-col justify-center md:justify-between h-full">
                <Drumpad beat="Tom-1" pressedKey="7" audiosrc="src/assets/tom-1.mp3" />
                <Drumpad beat="O-Hihat" pressedKey="4" audiosrc="src/assets/O-hihat.mp3" />
                <Drumpad beat="C-Hihat" pressedKey="1" audiosrc="src/assets/C-hihat.mp3" />
              </div>
              <div className="second flex flex-col justify-center md:justify-between h-full">
                <Drumpad beat="C-Cymbal" pressedKey="8" audiosrc="src/assets/C-cymbal.mp3" />
                <Drumpad beat="Snare" pressedKey="5" audiosrc="src/assets/snare.mp3" />
                <Drumpad beat="Kick" pressedKey="2" audiosrc="src/assets/kick.mp3" />
              </div>
              <div className="third flex flex-col justify-center md:justify-between h-full">
                <Drumpad beat="Tom-2" pressedKey="9" audiosrc="src/assets/tom-2.mp3" />
                <Drumpad beat="R-cymbal" pressedKey="6" audiosrc="src/assets/R-cymbal.mp3" />
                <Drumpad beat="Floortom" pressedKey="3" audiosrc="src/assets/floortom.mp3" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
