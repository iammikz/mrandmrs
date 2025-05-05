import React, {useEffect, useState} from 'react';
import Music from './Music';
import Slideshow from './Slideshow';
import { Button, ConfigProvider, Modal, Space } from 'antd';

const Memories = (props) => {
    const [count, setCount] = useState(0);
    const [toggleMusic,setToggleMusic] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const [loading, setLoading] = useState(false);
    
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
        boxShadow: '0 0 30px #999',
      },
    };

    useEffect(() => {
        if (!loading) {
            setLoading(true);
            toggleModal(0, true);
        }
    },[]);

    const handleOk = () => {
        toggleModal(0, false);
        setToggleMusic(true);
    };

  return (
    <>

        <Modal
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
        </Modal>

        <h1 class="fontHoneybee" style={{fontSize: "80px", lineHeight: 0}} >You + Me</h1>
        <Slideshow contentStyle={props.contentStyle}/>
        <Music toggleMusic={{toggleMusic}}/>
    </>
  )
}

export default Memories