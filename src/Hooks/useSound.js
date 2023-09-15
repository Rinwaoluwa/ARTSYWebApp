import Sound from '../assets/ClickSound.m4a';

function useSound() {
    //  if(!allowSound) return;
    const playSound = function () {
        const sound  = new Audio(Sound);
        sound.play()
    }
    playSound()
}

export { useSound }