import '../styles/Buttons.css'
import sounds  from '../data/sounds'

const Buttons = () => {

 const playSound = (src) => {
  const audio = new Audio(src);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
 };

 return (
  <div className="button-list">
    {sounds.map((sound) => (
      <button key={sound.id} className="button" onClick={() => playSound(sound.src)}>
        {sound.name}
      </button>
    ))}
  </div>
);
};

export default Buttons