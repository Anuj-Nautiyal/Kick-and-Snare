
import './App.css'
import Drumpad from './components/Drumpad'

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
                <Drumpad beat="Tom-1" pressedKey="7" audiosrc="src/assets/tom-1.mp3"/>
                <Drumpad beat="O-Hihat" pressedKey="4" audiosrc="src/assets/O-hihat.mp3"/>
                <Drumpad beat="C-Hihat" pressedKey="1" audiosrc="src/assets/C-hihat.mp3"/>
              </div>
              <div className="second">
                <Drumpad beat="C-Cymbal" pressedKey="8" audiosrc="src/assets/C-cymbal.mp3"/>
                <Drumpad beat="Snare" pressedKey="5" audiosrc="src/assets/snare.mp3"/>
                <Drumpad beat="Kick" pressedKey="2" audiosrc="src/assets/kick.mp3"/>
              </div>
              <div className="third">
                <Drumpad beat="Tom-2" pressedKey="9" audiosrc="src/assets/tom-2.mp3"/>
                <Drumpad beat="R-cymbal" pressedKey="6" audiosrc="src/assets/R-cymbal.mp3"/>
                <Drumpad beat="Floortom" pressedKey="3" audiosrc="src/assets/floortom.mp3"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
