import React, { useState } from 'react';
import './Hover.css';

const HoverMove = (props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveRange = 20;
    const top = Math.min(Math.max(-moveRange, y - moveRange), rect.height - moveRange);
    const left = Math.min(Math.max(-moveRange, x - moveRange), rect.width - moveRange);

    setPosition({ top, left });
  };

  const handleMouseLeave = () => {
    setPosition({ top: 0, left: 0 });
  };

  return (
    <div
      className="hover-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{transform:props.degree}}
    >
      <div
        className="hover-move-div"
        style={{ transform: `translate(${position.left}px, ${position.top}px)`,background:props.background}}
      >
        {props.text}
      </div>
    </div>
  );
};

export default HoverMove;
