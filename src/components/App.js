import React from 'react';
import '../App.css';
import Header from './Header';
import DrumKeys from './DrumKeys';

function App() {
  const data = [
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', letter: 'E', src: 'https://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
    { id: 'tom tom', letter: 'A', src: 'https://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
    { id: 'bass 3', letter: 'S', src: 'https://billor.chsh.chc.edu.tw/sound/bass4.wav' },
    { id: 'shotgun', letter: 'D', src: 'https://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
    { id: 'high hat', letter: 'Z', src: 'https://www.denhaku.com/r_box/tr707/closed.wav' },
    { id: 'drum hit', letter: 'X', src: 'https://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'laser', letter: 'C', src: 'https://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
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
