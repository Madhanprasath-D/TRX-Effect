import React, { useState, useEffect } from 'react';
import './Expand.css'

const ScrollExpandDiv = () => {
  const [width, setWidth] = useState('70px');
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 0.7; // Adjust threshold as needed

    if (scrollTop > threshold) {
      let width = parseInt(scrollY)
      // console.log(window.scrollY,width)
      if(scrollY>700){
        width = scrollY*3
      }
      if(width<=2700){
        setWidth(`${width}px`);
      }
      else{
        setWidth('2700px')
      }
    } else {
      setWidth('100px');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <div className='outer'>
    <div className="expand">
      <div
        style={{
          width:width,
          height:width,
        }} className='circle'>
        </div>
      <div className="black_circle"><img src="arrow.png" alt="" /></div>
    </div>
    <p>Dynamic Background</p>
    </div>
  );
};

export default ScrollExpandDiv;
