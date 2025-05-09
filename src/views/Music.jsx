import React,{useEffect, useState} from 'react'
import bluepiano from '../assets/sounds/bluepiano.mp3';

const audio = new Audio(bluepiano);
audio.loop = true;
audio.autoplay = true;

const Music = (prop) => {
    const {toggleMusic,setToggleMusic} = prop;
    const [enableSound,setEnableSound] = useState(false);
    
    useEffect(()=>{
        togglePlay();
    },[toggleMusic]);

    const togglePlay = () => {
        console.log(enableSound);
        if (enableSound) {
            audio.play();
        }else{
            audio.pause();
        }
        setEnableSound(!enableSound);
    }

  return (
    <div class="fontHoneybee" onClick={togglePlay}>{!enableSound ? 'Playing' : 'Touch to Play'} Music</div>
  )
}

export default Music