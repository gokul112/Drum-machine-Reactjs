import React from 'react';
import '../App.css';
import Header from './Header';
import DrumKeys from './DrumKeys';

function App() {
  const data = [
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', letter: 'E', src: 'https://inventwithpython.com/match5.wav' },
    { id: 'tom tom', letter: 'A', src: 'https://www.bbc.co.uk/northernireland/schools/sesame/includes/audio/shared/sfx/rollerskates.mp3' },
    { id: 'bass 3', letter: 'S', src: 'https://www.soundjay.com/mechanical/sounds/smack-1.mp3' },
    { id: 'shotgun', letter: 'D', src: 'https://waveevents.com/MyFilez/wavs/variety/brkglass.wav' },
    { id: 'high hat', letter: 'Z', src: 'https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/24-closed%20hi%20hat.wav' },
    { id: 'drum hit', letter: 'X', src: 'https://thebeautybrains.com/wp-content/uploads/podcast/soundfx/44.wav' },
    { id: 'laser', letter: 'C', src: 'https://www.planetsoarer.com/sounds/WayneTTrun.mp3'  },
  ]
  return (
    <div className="App">
      <Header title="Drum Machine"/>
      <div id="drum-pads">
          {data.map(d => (
              <DrumKeys key={d.id} id={d.id} letter={d.letter} src={d.src}/>
          ))}
      </div>
    </div>
  );
}

export default App;
