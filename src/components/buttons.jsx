import '../styles/Buttons.css'
import sounds  from '../data/sounds'
import { useState } from 'react';

const Buttons = () => {

  const [audio, setAudio] = useState(null);
  
 const playSound = (src) => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  const newAudio = new Audio(src);
  newAudio.play();

  setAudio(newAudio);
 };

 return (
  <div className="button-list">
    {sounds.map((sound) => (
      <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
        {sound.emoji}
      </button>
    ))}
  </div>
);
};

export default Buttons