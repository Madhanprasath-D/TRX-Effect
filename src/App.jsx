import { useState } from 'react'
import './App.css'

function App() {

  
  return (
    <>
      <Nav/>
      <Hero/>
    </>
  )
}


function Nav() {

  const [hoverNav,setHoverNav] = useState(false)

  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 50){
      setHoverNav(true)
    }
    else{
      setHoverNav(false)
    }
  })

  return (
    <div className='Nav' style={hoverNav?{backgroundColor:"white", transition:"0.1s"}:{backgroundColor:"transparent"}}>
      <img src="logo.webp" alt="" />
      <ul>
        <li>Dynamic Background</li>
        <li>Image Effects</li>
        <li>Background Text</li>
        <li>Image Mask</li>
        <li>Mouse Helper</li>
        <li>Background Slides</li>
      </ul>
      <button className="btn">Buy Now</button>
    </div>
  )
}


function Hero() {
  return (
    <div className='Hero'>
      <h1>Visual Effects & Animation Kit</h1>
      <section className='plugin'>
        <div className="inner_plugin">
            <h1 className='span'>P</h1>
            <h1 className='span'>L</h1>
            <h1 className='span'>U</h1>
            <h1 className='span'>G</h1>
            <h1 className='span'>I</h1>
            <h1 className='span'>N</h1>
        </div>
      </section>
    </div>
  )
}



export default App
