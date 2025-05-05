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
        console.log(audio);
        if (enableSound) {
            audio.pause();
        }else{
            audio.play();
        }
        setEnableSound(!enableSound);
    }

  return (
    <div onClick={togglePlay}>{enableSound ? 'Playing' : 'Paused'}</div>
  )
}

export default Music