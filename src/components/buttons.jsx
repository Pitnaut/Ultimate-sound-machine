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

//  Categorías
const sfxSounds = sounds.filter((sound) => sound.categoria === 'sfx');
const memeSounds = sounds.filter((sound) => sound.categoria === 'memes');
const musicSounds = sounds.filter((sound) => sound.categoria === 'musica');
const gameSounds = sounds.filter((sound) => sound.categoria === 'videojuegos');
const liljonSounds = sounds.filter((sound) => sound.categoria === 'liljon');

 return (
  <>
    <div className="categorie-container">
      <h3>Ruiditos</h3>
      <div className="button-list">
        {sfxSounds.map((sound) => (
          <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
            {sound.emoji}
          </button>
        ))}
      </div>
    </div>

    <div className="categorie-container">
      <h3>Memes</h3>
      <div className="button-list">
        {memeSounds.map((sound) => (
          <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
            {sound.emoji}
          </button>
        ))}
      </div>
    </div>

    <div className="categorie-container">
      <h3>Juegos de video</h3>
      <div className="button-list">
        {gameSounds.map((sound) => (
          <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
            {sound.emoji}
          </button>
        ))}
      </div>
    </div>

    <div className="categorie-container">
      <h3>¡Musicaliza tu vida!</h3>
      <div className="button-list">
        {musicSounds.map((sound) => (
          <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
            {sound.emoji}
          </button>
        ))}
      </div>
    </div>

    <div className="categorie-container">
      <h3>Yep, una categoría solo de Lil Jon</h3>
      <div className="button-list">
        {liljonSounds.map((sound) => (
          <button key={sound.name} className="button" onClick={() => playSound(sound.src)}>
            {sound.emoji}
          </button>
        ))}
      </div>
    </div>
  </>

);
};

export default Buttons