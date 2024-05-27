import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion';
import MouseFollower from 'mouse-follower';
import 'mouse-follower/dist/mouse-follower.min.css';

function Cruser() {

    // const [mousePoint, setmousePoint] = useState({ x: 0, y: 0 });

    // useEffect(()=>{
    //     const mouse = e =>{
    //         setmousePoint({
    //             x:e.clientX,
    //             y:e.clientY
    //         })
    //     }
    //     window.addEventListener('mousemove',mouse)
    //     return ()=>{
    //         window.addEventListener('mousemove',mouse)
    //     }
    // },[])

    // const mouseStyle = {
    //     position: "absolute",
    //     top:"0",
    //     left:'0',
    //     width: "20px",
    //     height: "20px",
    //     borderRadius: "50%",
    //     pointerEvents: "none",
    //     transform: "translate(-50%,-50%)",
    //     zIndex:"22",
    //     backgroundColor:"black"
    // }
    // const variants={
    //     default:{
    //         x:mousePoint.x-10,
    //         y:mousePoint.y-10
    //     }
    // }

    useEffect(()=>{
        const cursor = new MouseFollower({
            container: 'body',
            speed: 0.55,
            ease: 'expo.out',
            overwrite: true,
        });

        return ()=>{
            cursor.destroy()
        }
    },[])
    return (
        <motion.div style={mouseStyle} variants={variants} animate="default"/>
        // <div><h1>Madhan</h1></div>
    )
}

export default Cruser