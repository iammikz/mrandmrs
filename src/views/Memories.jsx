import React, {useEffect, useState} from 'react';
import Music from './Music';
import Slideshow from './Slideshow';
import SlideshowSwiper from './SlideshowSwiper';
import { Button, ConfigProvider, Modal, Space } from 'antd';
import { useSearchParams } from 'react-router-dom';
import Animatedheart from './Animatedheart';

const Memories = (props) => {
    const [count, setCount] = useState(0);
    const [toggleMusic,setToggleMusic] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const live = searchParams?.get("live") ?? true;

    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [toggleNextSlide,setToggleNextSlide] = useState(false);
    
    const toggleModal = (idx, target) => {
      setIsModalOpen(p => {
        p[idx] = target;
        return [...p];
      });
    };

    const modalStyles = {
      header: {
        borderLeft: `5px solid #444`,
        borderRadius: 0,
        paddingInlineStart: 5,
      },
      body: {
        background: '#589b47',
        // boxShadow: 'inset 0 0 5px #999',
        borderRadius: 5,
      },
      mask: {
        backdropFilter: 'blur(10px)',
      },
      footer: {
        // borderTop: '1px solid #333',
      },
      content: {
        borderRadius: 8,
        background: '#589b47',
        boxShadow: '0 0 30px #444',
      },
    };

    const handleOk = () => {
      if (!hasLoaded) {
        console.log(hasLoaded);
        setHasLoaded(true);
        toggleModal(0, false);
        setToggleMusic(true);
        setToggleNextSlide(true);
      }
    };

    useEffect(() => {
      console.log(hasLoaded);
    },[hasLoaded])

    useEffect(() => {
      const handleClick = () => {
        // Action to perform on the first click
        console.log('Body clicked once!');
        handleOk();
  
        // Remove the event listener after the first click
        document.body.removeEventListener('click', handleClick);
      };
  
      document.body.addEventListener('click', handleClick);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.body.removeEventListener('click', handleClick);
      };
    }, []);

  return (
    <>

        {/* <Modal
            title=""
            width={'80%'}
            open={isModalOpen[0]}
            onOk={() => setToggleMusic(true)}
            // onCancel={() => toggleModal(0, false)}
            styles={modalStyles}
            closable={false}
            footer={<div></div>}
            >
                <div style={{height:"75vh", textAlign: 'center'}}>
                    <p>Image and brief Notes here</p>
                    <Button key="submit" type="primary" onClick={()=>{handleOk()}}>
                        Click Me!
                    </Button>
                </div>
        </Modal> */}

        <h1 class="fontHoneybee" style={{fontSize: "80px", lineHeight: 0,textShadow: "2px 2px rgb(0, 0, 0)"}} >{(live ? "Julie + Miki" : "You + Me")}</h1>
        {/* <Slideshow contentStyle={props.contentStyle}/> */}
        <Animatedheart/>
        <SlideshowSwiper contentStyle={props.contentStyle} loadFirstSlide={toggleNextSlide}/>
        <Music toggleMusic={{toggleMusic}}  hasLoaded={{hasLoaded}}/>
        <div className='qrRedirectLink'></div>
    </>
  )
}

export default Memories