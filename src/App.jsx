import { useState } from 'react'
import './App.css'
import Cruser from './Cruser'
import ScrollExpandDiv from './Expand'
import HoverMove from './Hover'


function App() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Cruser/> */}
      <Line />
      {/* <Expand/> */}
      <ScrollExpandDiv />
      <Continer />
    </>
  )
}


function Nav() {

  const [hoverNav, setHoverNav] = useState(false)
  const [m_view,setm_view] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      setHoverNav(true)
    }
    else {
      setHoverNav(false)
    }
  });

  return (
    <div className='Nav' style={hoverNav ? { backgroundColor: "white", transition: "0.1s" } : { backgroundColor: "transparent" }}>
      <img src="logo.webp" alt="" />
      <ul className={m_view?'mobile':'desktop'}>
        <li>Dynamic Background</li>
        <li>Image Effects</li>
        <li>Background Text</li>
        <li>Image Mask</li>
        <li>Mouse Helper</li>
        <li>Background Slides</li>
        {m_view?<li>Buy now</li>:<></>}
      </ul>
      <button className="btn">Buy Now</button>
      <div className="mobile_menu" onClick={()=>setm_view(!m_view)}>
        {!m_view? <img src='bx-menu.svg'/>:<img src='bx-x.svg'/>}
      </div>
    </div>
  )
}


function Hero() {
  return (
    <div className='Hero'>
      <h1>Visual Effects & Animation Kit</h1>
      <section className='plugin'>
        <div className="inner_plugin">
          <div className="span">
            <h1 className='span1'>P</h1>
            <div className='subclass one'><HoverMove text="Text" background="linear-gradient(90deg, #A364F2 0%, #F8CBE8 100%)"/></div>
          </div>
          <div className="span">
            <h1 className='span1'>L</h1>
            <div className='subclass two'><HoverMove text="Mouse" background="linear-gradient(90deg, #B1F8F5 0%, #F0C0E5 100%)"/></div>
          </div>
          <div className="span">
            <h1 className='span1'>U</h1>
          </div>
          <div className="span">
            <h1 className='span1'>G</h1>
            <div className='subclass three'><HoverMove text="Dynamic" background="linear-gradient(90deg, #FDD4B2 0%, #FF628C 100%)"/></div>
          </div>
          <div className="span">
            <h1 className='span1'>I</h1>
            <div className='subclass four'><HoverMove text="Image" background="linear-gradient(90deg, #FDD2B1 0%, #A465F2 100%)"/></div>
          </div>
          <div className="span">
            <h1 className='span1'>N</h1>
            <div className='subclass five'><HoverMove text="Background" background="linear-gradient(90deg, #B1F8F5 0%, #F0C0E5 100%)"/></div>
          </div>
        </div>
      </section>
    </div>
  )
}


function Line() {
  return (
    <div className="parent">
      <div className='Line'>
        <h3>EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT  <span>|</span></h3>
        <h3>EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT  <span>|</span></h3>
        <h3>EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT  <span>|</span></h3>
        <h3>EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT  <span>|</span></h3>
      </div>
    </div>
  )
}

function Continer() {
  return (
    <div className='Continer'>
      <div className="inner_continer">
        <div className="left">
          <img src="eff-2.webp" alt="" />
          <img src="111mask.webp" alt="" />
        </div>
        <div className="right">
          <h2>Image hovers with OpenGL effects</h2>
          <p>Amazing image hover effects for creatives. Make your website stand out from the crowd!</p>
        </div>
      </div>
    </div>
  )
}


export default App
