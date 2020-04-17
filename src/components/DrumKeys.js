import React, { useRef } from 'react';
import '../App.css';

const DrumKeys = (props) => {

    const audio = useRef(null);
    const setSource = (e) => {
        audio.current.play();
    }

    return (
        <div className="drum-pad" onClick={setSource}>
          <h1>{props.letter}</h1>
          <audio ref={audio} src={props.src} id={props.id}/>
        </div>
    )
}
export default DrumKeys; 