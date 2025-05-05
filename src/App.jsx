import React,{ useState } from 'react';
import Memories from './views/Memories';
import './css/App.css';

function App() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    background: 'transparent',
  };
  
  return (
    <Memories contentStyle={contentStyle} />
  )
}

export default App
